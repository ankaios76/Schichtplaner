import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Database from "better-sqlite3";

dotenv.config({ path: process.env.ENV_FILE || ".env.local" });

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || "./data.db";

app.use(cors());
app.use(express.json({ limit: "2mb" }));

const db = new Database(DB_PATH);

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      system_role TEXT NOT NULL,
      team TEXT NOT NULL,
      status TEXT NOT NULL,
      role_title TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      state TEXT
    );
    CREATE TABLE IF NOT EXISTS hierarchy_nodes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      parent_id INTEGER,
      type TEXT NOT NULL,
      name TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      FOREIGN KEY(parent_id) REFERENCES hierarchy_nodes(id)
    );
    CREATE TABLE IF NOT EXISTS swaps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      requester TEXT NOT NULL,
      team TEXT NOT NULL,
      date TEXT NOT NULL,
      reason TEXT,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS settings (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      company_name TEXT,
      logo TEXT
    );
    CREATE TABLE IF NOT EXISTS shifts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      date TEXT NOT NULL,
      segments_json TEXT NOT NULL,
      status TEXT,
      UNIQUE(user_id, date),
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
  `);

  db.prepare("INSERT OR IGNORE INTO settings (id, company_name, logo) VALUES (1, NULL, NULL)").run();
}

function ensureShiftStatusColumn() {
  const columns = db.prepare("PRAGMA table_info(shifts)").all();
  const hasStatus = columns.some((col) => col.name === "status");
  if (!hasStatus) {
    db.exec("ALTER TABLE shifts ADD COLUMN status TEXT");
  }
}

function ensureUserStateColumn() {
  const columns = db.prepare("PRAGMA table_info(users)").all();
  const hasState = columns.some((col) => col.name === "state");
  if (!hasState) {
    db.exec("ALTER TABLE users ADD COLUMN state TEXT");
  }
}

function buildTree(rows) {
  const byId = new Map();
  rows.forEach((row) => {
    byId.set(row.id, { ...row, children: [] });
  });
  const roots = [];
  byId.forEach((node) => {
    if (node.parent_id) {
      const parent = byId.get(node.parent_id);
      if (parent) parent.children.push(node);
    } else {
      roots.push(node);
    }
  });
  const sortNodes = (nodes) => {
    nodes.sort((a, b) => a.sort_order - b.sort_order);
    nodes.forEach((node) => sortNodes(node.children));
  };
  sortNodes(roots);
  return roots;
}

initDb();
ensureShiftStatusColumn();
ensureUserStateColumn();

function hasSupervisor() {
  const sup = db.prepare("SELECT id FROM users WHERE system_role = 'supervisor'").get();
  return !!sup;
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "Missing credentials" });

  const user = db
    .prepare("SELECT id, name, username, password_hash, system_role, team, status, role_title, email, phone, state FROM users WHERE username = ?")
    .get(username);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const ok = bcrypt.compareSync(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  res.json({
    id: user.id,
    name: user.name,
    username: user.username,
    systemRole: user.system_role,
    team: user.team,
    status: user.status,
    role: user.role_title,
    email: user.email,
    phone: user.phone,
    state: user.state,
  });
});

app.get("/api/settings", (req, res) => {
  const row = db.prepare("SELECT company_name, logo FROM settings WHERE id = 1").get();
  res.json({
    companyName: row?.company_name || null,
    logo: row?.logo || null,
    hasSupervisor: hasSupervisor(),
  });
});

app.post("/api/settings", (req, res) => {
  const { companyName, logo } = req.body || {};
  if (!companyName) return res.status(400).json({ error: "Missing company name" });
  db.prepare("UPDATE settings SET company_name = ?, logo = ? WHERE id = 1").run(companyName, logo || null);
  res.json({ ok: true });
});

app.post("/api/setup", (req, res) => {
  const { name, username, password, state } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "Missing credentials" });
  if (hasSupervisor()) return res.status(409).json({ error: "Supervisor exists" });
  const hash = bcrypt.hashSync(password, 10);
  db.prepare(
    "INSERT INTO users (name, username, password_hash, system_role, team, status, role_title, email, phone, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  ).run(name || "Supervisor", username, hash, "supervisor", "unassigned", "aktiv", "Supervisor", null, null, state || "NW");
  res.json({ ok: true });
});

app.get("/api/hierarchy", (req, res) => {
  const rows = db.prepare("SELECT * FROM hierarchy_nodes").all();
  res.json(buildTree(rows));
});

app.post("/api/hierarchy", (req, res) => {
  const { parentId, type, name } = req.body || {};
  if (!type || !name) return res.status(400).json({ error: "Missing fields" });
  const sortOrder = db
    .prepare("SELECT COALESCE(MAX(sort_order), 0) + 1 as next FROM hierarchy_nodes WHERE parent_id IS ?")
    .get(parentId || null).next;
  const result = db
    .prepare("INSERT INTO hierarchy_nodes (parent_id, type, name, sort_order) VALUES (?, ?, ?, ?)")
    .run(parentId || null, type, name, sortOrder);
  res.json({ id: result.lastInsertRowid });
});

app.put("/api/hierarchy/:id", (req, res) => {
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ error: "Missing name" });
  db.prepare("UPDATE hierarchy_nodes SET name = ? WHERE id = ?").run(name, Number(req.params.id));
  res.json({ ok: true });
});

app.delete("/api/hierarchy/:id", (req, res) => {
  const id = Number(req.params.id);
  db.prepare("DELETE FROM hierarchy_nodes WHERE id = ?").run(id);
  db.prepare("UPDATE hierarchy_nodes SET parent_id = NULL WHERE parent_id = ?").run(id);
  res.json({ ok: true });
});

app.post("/api/hierarchy/move", (req, res) => {
  const { sourceId, targetId } = req.body || {};
  if (!sourceId || !targetId) return res.status(400).json({ error: "Missing ids" });
  db.prepare("UPDATE hierarchy_nodes SET parent_id = ? WHERE id = ?").run(targetId, sourceId);
  res.json({ ok: true });
});

app.get("/api/users", (req, res) => {
  const rows = db
    .prepare("SELECT id, name, username, system_role, team, status, role_title, email, phone, state FROM users")
    .all();
  res.json(rows.map((u) => ({
    id: u.id,
    name: u.name,
    username: u.username,
    systemRole: u.system_role,
    team: u.team,
    status: u.status,
    role: u.role_title,
    email: u.email,
    phone: u.phone,
    state: u.state,
  })));
});

app.post("/api/users", (req, res) => {
  const { name, username, password, systemRole, team, status, role, email, phone, state } = req.body || {};
  if (!name || !username || !password || !systemRole || !team || !status) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const roleValue = role || "Mitarbeiter";
  const hash = bcrypt.hashSync(password, 10);
  try {
    const result = db.prepare(
      "INSERT INTO users (name, username, password_hash, system_role, team, status, role_title, email, phone, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    ).run(name, username, hash, systemRole, team, status, roleValue, email || null, phone || null, state || null);
    res.json({ id: result.lastInsertRowid });
  } catch (err) {
    res.status(409).json({ error: "Username exists" });
  }
});

app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, username, password, systemRole, team, status, role, email, phone, state } = req.body || {};
  const user = db.prepare("SELECT id FROM users WHERE id = ?").get(id);
  if (!user) return res.status(404).json({ error: "Not found" });

  if (username) {
    const existing = db.prepare("SELECT id FROM users WHERE username = ? AND id != ?").get(username, id);
    if (existing) return res.status(409).json({ error: "Username exists" });
  }

  const fields = {
    name,
    username,
    system_role: systemRole,
    team,
    status,
    role_title: role || undefined,
    email,
    phone,
    state,
  };

  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined) return;
    db.prepare(`UPDATE users SET ${key} = ? WHERE id = ?`).run(value, id);
  });

  if (password) {
    const hash = bcrypt.hashSync(password, 10);
    db.prepare("UPDATE users SET password_hash = ? WHERE id = ?").run(hash, id);
  }

  res.json({ ok: true });
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  db.prepare("DELETE FROM users WHERE id = ?").run(id);
  res.json({ ok: true });
});

app.get("/api/swaps", (req, res) => {
  const rows = db.prepare("SELECT * FROM swaps ORDER BY created_at DESC").all();
  res.json(rows);
});

app.post("/api/swaps", (req, res) => {
  const { requester, team, date, reason, status } = req.body || {};
  if (!requester || !team || !date) return res.status(400).json({ error: "Missing fields" });
  const result = db.prepare(
    "INSERT INTO swaps (requester, team, date, reason, status, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  ).run(requester, team, date, reason || null, status || "offen", new Date().toISOString());
  res.json({ id: result.lastInsertRowid });
});

app.put("/api/swaps/:id", (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body || {};
  if (!status) return res.status(400).json({ error: "Missing status" });
  db.prepare("UPDATE swaps SET status = ? WHERE id = ?").run(status, id);
  res.json({ ok: true });
});

app.get("/api/shifts", (req, res) => {
  const { userId, teamId, from, to } = req.query || {};
  if (!from || !to) return res.status(400).json({ error: "Missing range" });

  if (userId) {
    const rows = db
      .prepare("SELECT user_id, date, segments_json, status FROM shifts WHERE user_id = ? AND date BETWEEN ? AND ?")
      .all(Number(userId), from, to);
    return res.json(
      rows.map((row) => ({
        userId: row.user_id,
        date: row.date,
        segments: JSON.parse(row.segments_json),
        status: row.status || "Support",
      }))
    );
  }

  if (teamId) {
    const rows = db
      .prepare(
        `SELECT s.user_id, s.date, s.segments_json, s.status, u.name
         FROM shifts s
         JOIN users u ON u.id = s.user_id
         WHERE u.team = ? AND s.date BETWEEN ? AND ?`
      )
      .all(teamId, from, to);
    return res.json(
      rows.map((row) => ({
        userId: row.user_id,
        name: row.name,
        date: row.date,
        segments: JSON.parse(row.segments_json),
        status: row.status || "Support",
      }))
    );
  }

  return res.status(400).json({ error: "Missing filter" });
});

app.post("/api/shifts", (req, res) => {
  const { userId, date, segments, status } = req.body || {};
  if (!userId || !date || !segments) return res.status(400).json({ error: "Missing fields" });
  const json = JSON.stringify(segments);
  const statusValue = status || "Support";
  db.prepare(
    "INSERT INTO shifts (user_id, date, segments_json, status) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, date) DO UPDATE SET segments_json = excluded.segments_json, status = excluded.status"
  ).run(Number(userId), date, json, statusValue);
  res.json({ ok: true });
});

app.delete("/api/shifts", (req, res) => {
  const { userId, date } = req.body || {};
  if (!userId || !date) return res.status(400).json({ error: "Missing fields" });
  db.prepare("DELETE FROM shifts WHERE user_id = ? AND date = ?").run(Number(userId), date);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`API listening on ${PORT}`);
});
