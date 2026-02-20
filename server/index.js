import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { Pool as PgPool } from "pg";
import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { execSync } from "child_process";

dotenv.config({ path: process.env.ENV_FILE || ".env.local" });

const app = express();
const PORT = process.env.PORT || 3000;
const SERVER_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname));
const BOOTSTRAP_FILE = path.join(SERVER_DIR, "bootstrap.json");

const DB_CLIENT = (process.env.DB_CLIENT || "").toLowerCase();
const DB_HOST = process.env.DB_HOST || "127.0.0.1";
const DB_PORT = Number(process.env.DB_PORT || (DB_CLIENT === "mysql" ? 3306 : 5432));
const DB_USER = process.env.DB_USER || "sp_pln";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "sp_pln";
const BOOTSTRAP_MODE = process.env.BOOTSTRAP === "1" || !DB_CLIENT;

app.use(cors());
app.use(express.json({ limit: "4mb" }));

let db;

function toPg(sql, params = []) {
  let i = 0;
  const text = sql.replace(/\?/g, () => `$${++i}`);
  return { text, values: params };
}

async function createSchemaWith(client, execFn) {
  if (client === "postgres") {
    await execFn(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
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
        id SERIAL PRIMARY KEY,
        parent_id INTEGER,
        type TEXT NOT NULL,
        name TEXT NOT NULL,
        sort_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS swaps (
        id SERIAL PRIMARY KEY,
        requester TEXT NOT NULL,
        team TEXT NOT NULL,
        date DATE NOT NULL,
        reason TEXT,
        status TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL
      );
      CREATE TABLE IF NOT EXISTS shifts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        date DATE NOT NULL,
        segments_json TEXT NOT NULL,
        status TEXT,
        UNIQUE(user_id, date)
      );
      CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY,
        company_name TEXT,
        logo TEXT
      );
    `);
    await execFn(
      "INSERT INTO settings (id, company_name, logo) VALUES (1, NULL, NULL) ON CONFLICT (id) DO NOTHING"
    );
    return;
  }

  await execFn(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      system_role VARCHAR(50) NOT NULL,
      team VARCHAR(255) NOT NULL,
      status VARCHAR(50) NOT NULL,
      role_title VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      phone VARCHAR(255),
      state VARCHAR(50)
    );
  `);
  await execFn(`
    CREATE TABLE IF NOT EXISTS hierarchy_nodes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      parent_id INT NULL,
      type VARCHAR(50) NOT NULL,
      name VARCHAR(255) NOT NULL,
      sort_order INT NOT NULL DEFAULT 0
    );
  `);
  await execFn(`
    CREATE TABLE IF NOT EXISTS swaps (
      id INT AUTO_INCREMENT PRIMARY KEY,
      requester VARCHAR(255) NOT NULL,
      team VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      reason TEXT,
      status VARCHAR(50) NOT NULL,
      created_at DATETIME NOT NULL
    );
  `);
  await execFn(`
    CREATE TABLE IF NOT EXISTS shifts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      date DATE NOT NULL,
      segments_json TEXT NOT NULL,
      status VARCHAR(50),
      UNIQUE KEY uniq_user_date (user_id, date)
    );
  `);
  await execFn(`
    CREATE TABLE IF NOT EXISTS settings (
      id INT PRIMARY KEY,
      company_name VARCHAR(255),
      logo LONGTEXT
    );
  `);
  await execFn("INSERT IGNORE INTO settings (id, company_name, logo) VALUES (1, NULL, NULL)");
}

async function initDb() {
  if (DB_CLIENT === "postgres") {
    db = new PgPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
  } else if (DB_CLIENT === "mysql") {
    db = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      connectionLimit: 10,
    });
  } else {
    throw new Error(`Unsupported DB_CLIENT: ${DB_CLIENT}`);
  }

  await createSchema();
}

async function query(sql, params = []) {
  if (DB_CLIENT === "postgres") {
    const { text, values } = toPg(sql, params);
    const res = await db.query(text, values);
    return res.rows;
  }
  const [rows] = await db.execute(sql, params);
  return rows;
}

async function execute(sql, params = []) {
  if (DB_CLIENT === "postgres") {
    const { text, values } = toPg(sql, params);
    const res = await db.query(text, values);
    return res;
  }
  return db.execute(sql, params);
}

async function createSchema() {
  await createSchemaWith(DB_CLIENT, async (sql) => execute(sql));
}

async function hasSupervisor() {
  const rows = await query("SELECT id FROM users WHERE system_role = ? LIMIT 1", ["supervisor"]);
  return rows.length > 0;
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

function randomPassword() {
  return crypto.randomBytes(12).toString("base64url");
}

function sanitizeIdentifier(value, fallback) {
  if (!value) return fallback;
  const clean = value.trim();
  if (!/^[a-zA-Z0-9_]+$/.test(clean)) return null;
  return clean;
}

function escapeSqlString(value) {
  return String(value || "").replace(/'/g, "''");
}

function writeEnv(config) {
  const content = `PORT=3000\nDB_CLIENT=${config.client}\nDB_HOST=${config.host}\nDB_PORT=${config.port}\nDB_USER=${config.user}\nDB_PASSWORD=${config.password}\nDB_NAME=${config.name}\n`;
  fs.writeFileSync(path.join(SERVER_DIR, ".env.local"), content, "utf8");
}

function readBootstrap() {
  if (!fs.existsSync(BOOTSTRAP_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(BOOTSTRAP_FILE, "utf8"));
  } catch {
    return {};
  }
}

function writeBootstrap(data) {
  fs.writeFileSync(BOOTSTRAP_FILE, JSON.stringify(data), "utf8");
}

if (BOOTSTRAP_MODE) {
  app.get("/api/bootstrap/status", (req, res) => {
    const data = readBootstrap();
    res.json({ needsDbConfig: true, companyName: data.companyName || null, logo: data.logo || null });
  });

  app.post("/api/bootstrap/company", (req, res) => {
    const { companyName, logo } = req.body || {};
    if (!companyName) return res.status(400).json({ error: "Missing company name" });
    writeBootstrap({ companyName, logo: logo || null });
    res.json({ ok: true });
  });

  app.post("/api/bootstrap/config", async (req, res) => {
    const { dbClient, mode, dbHost, dbPort, dbName, dbUser, dbPassword } = req.body || {};
    if (!dbClient || !mode) return res.status(400).json({ error: "Missing config" });

    let client = dbClient.toLowerCase();
    let host = dbHost || "127.0.0.1";
    let port = Number(dbPort || (client === "mysql" ? 3306 : 5432));
    let name = dbName || "sp_pln";
    let user = dbUser || "sp_pln";
    let password = dbPassword || randomPassword();

    try {
      if (mode !== "local" && mode !== "external") {
        return res.status(400).json({ error: "Invalid mode" });
      }

      if (mode === "external") {
        if (!dbHost || !dbName || !dbUser || !dbPassword) {
          return res.status(400).json({ error: "Missing external DB fields" });
        }
      }

      if (mode === "local") {
        name = sanitizeIdentifier(name, "sp_pln");
        user = sanitizeIdentifier(user, "sp_pln");
        if (!name || !user) {
          return res.status(400).json({ error: "Invalid DB name or user" });
        }
      }

      if (mode === "local") {
        if (client === "postgres") {
          const existsDb = execSync(
            `sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='${name}'"`,
            { stdio: "pipe" }
          )
            .toString()
            .trim();
          if (!existsDb) {
            execSync(`sudo -u postgres psql -c "CREATE DATABASE ${name};"`, { stdio: "ignore" });
          }

          const existsUser = execSync(
            `sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='${user}'"`,
            { stdio: "pipe" }
          )
            .toString()
            .trim();
          const safePass = escapeSqlString(password);
          if (!existsUser) {
            execSync(`sudo -u postgres psql -c "CREATE USER ${user} WITH PASSWORD '${safePass}';"`, { stdio: "ignore" });
          } else {
            execSync(`sudo -u postgres psql -c "ALTER USER ${user} WITH PASSWORD '${safePass}';"`, { stdio: "ignore" });
          }
          execSync(`sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${name} TO ${user};"`, { stdio: "ignore" });
          execSync(`sudo -u postgres psql -d ${name} -c "GRANT USAGE, CREATE ON SCHEMA public TO ${user};"`, { stdio: "ignore" });
          execSync(
            `sudo -u postgres psql -d ${name} -c "ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO ${user};"`,
            { stdio: "ignore" }
          );
        } else {
          execSync(`mysql -uroot -e "CREATE DATABASE IF NOT EXISTS ${name};"`, { stdio: "ignore" });
          execSync(
            `mysql -uroot -e "CREATE USER IF NOT EXISTS '${user}'@'%' IDENTIFIED BY '${escapeSqlString(password)}';"`,
            { stdio: "ignore" }
          );
          execSync(`mysql -uroot -e "GRANT ALL PRIVILEGES ON ${name}.* TO '${user}'@'%';"`, { stdio: "ignore" });
        }
      }

      writeEnv({ client, host, port, name, user, password });

      const bootstrap = readBootstrap();
      if (client === "postgres") {
        const temp = new PgPool({ host, port, user, password, database: name });
        await createSchemaWith("postgres", async (sql) => temp.query(sql));
        if (bootstrap.companyName) {
          await temp.query(
            "INSERT INTO settings (id, company_name, logo) VALUES (1, $1, $2) ON CONFLICT (id) DO UPDATE SET company_name = EXCLUDED.company_name, logo = EXCLUDED.logo",
            [bootstrap.companyName, bootstrap.logo]
          );
        }
        await temp.end();
      } else {
        const temp = await mysql.createConnection({ host, port, user, password, database: name });
        await createSchemaWith("mysql", async (sql) => temp.query(sql));
        if (bootstrap.companyName) {
          await temp.query(
            "INSERT INTO settings (id, company_name, logo) VALUES (1, ?, ?) ON DUPLICATE KEY UPDATE company_name = VALUES(company_name), logo = VALUES(logo)",
            [bootstrap.companyName, bootstrap.logo]
          );
        }
        await temp.end();
      }

      res.json({ ok: true, dbUser: user, dbPassword: password, dbName: name, dbHost: host, dbPort: port });

      // restart service so it boots with DB config
      try {
        execSync("systemctl restart sp-pln.service", { stdio: "ignore" });
      } catch {}
    } catch (err) {
      console.error("Bootstrap DB setup failed:", err);
      res.status(500).json({ error: err?.message || "DB setup failed" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Bootstrap API listening on ${PORT}`);
  });
} else {
  await initDb();

  app.post("/api/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "Missing credentials" });

  const rows = await query(
    "SELECT id, name, username, password_hash, system_role, team, status, role_title, email, phone, state FROM users WHERE username = ?",
    [username]
  );
  const user = rows[0];
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

  app.get("/api/settings", async (req, res) => {
  const rows = await query("SELECT company_name, logo FROM settings WHERE id = 1", []);
  const row = rows[0] || {};
  res.json({
    companyName: row.company_name || null,
    logo: row.logo || null,
    hasSupervisor: await hasSupervisor(),
  });
});

  app.post("/api/settings", async (req, res) => {
  const { companyName, logo } = req.body || {};
  if (!companyName) return res.status(400).json({ error: "Missing company name" });
  await execute("UPDATE settings SET company_name = ?, logo = ? WHERE id = 1", [companyName, logo || null]);
  res.json({ ok: true });
});

  app.post("/api/setup", async (req, res) => {
  const { name, username, password, state } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "Missing credentials" });
  if (await hasSupervisor()) return res.status(409).json({ error: "Supervisor exists" });
  const hash = bcrypt.hashSync(password, 10);
  await execute(
    "INSERT INTO users (name, username, password_hash, system_role, team, status, role_title, email, phone, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [name || "Supervisor", username, hash, "supervisor", "unassigned", "aktiv", "Supervisor", null, null, state || "NW"]
  );
  res.json({ ok: true });
});

  app.get("/api/hierarchy", async (req, res) => {
  const rows = await query("SELECT * FROM hierarchy_nodes", []);
  res.json(buildTree(rows));
});

app.post("/api/hierarchy", async (req, res) => {
  const { parentId, type, name } = req.body || {};
  if (!type || !name) return res.status(400).json({ error: "Missing fields" });
  let sortRows;
  if (parentId === null || parentId === undefined || parentId === "") {
    sortRows = await query("SELECT COALESCE(MAX(sort_order), 0) + 1 as next FROM hierarchy_nodes WHERE parent_id IS NULL", []);
  } else {
    sortRows = await query("SELECT COALESCE(MAX(sort_order), 0) + 1 as next FROM hierarchy_nodes WHERE parent_id = ?", [
      parentId,
    ]);
  }
  const sortOrder = sortRows[0]?.next || 1;
  await execute(
    "INSERT INTO hierarchy_nodes (parent_id, type, name, sort_order) VALUES (?, ?, ?, ?)",
    [parentId || null, type, name, sortOrder]
  );
  res.json({ ok: true });
});

  app.put("/api/hierarchy/:id", async (req, res) => {
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ error: "Missing name" });
  await execute("UPDATE hierarchy_nodes SET name = ? WHERE id = ?", [name, Number(req.params.id)]);
  res.json({ ok: true });
});

  app.delete("/api/hierarchy/:id", async (req, res) => {
  const id = Number(req.params.id);
  await execute("DELETE FROM hierarchy_nodes WHERE id = ?", [id]);
  await execute("UPDATE hierarchy_nodes SET parent_id = NULL WHERE parent_id = ?", [id]);
  res.json({ ok: true });
});

  app.post("/api/hierarchy/move", async (req, res) => {
  const { sourceId, targetId } = req.body || {};
  if (!sourceId || !targetId) return res.status(400).json({ error: "Missing ids" });
  await execute("UPDATE hierarchy_nodes SET parent_id = ? WHERE id = ?", [targetId, sourceId]);
  res.json({ ok: true });
});

  app.get("/api/users", async (req, res) => {
  const rows = await query(
    "SELECT id, name, username, system_role, team, status, role_title, email, phone, state FROM users",
    []
  );
  res.json(
    rows.map((u) => ({
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
    }))
  );
});

  app.post("/api/users", async (req, res) => {
  const { name, username, password, systemRole, team, status, role, email, phone, state } = req.body || {};
  if (!name || !username || !password || !systemRole || !team || !status) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const roleValue = role || "Mitarbeiter";
  const hash = bcrypt.hashSync(password, 10);
  try {
    await execute(
      "INSERT INTO users (name, username, password_hash, system_role, team, status, role_title, email, phone, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, username, hash, systemRole, team, status, roleValue, email || null, phone || null, state || null]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(409).json({ error: "Username exists" });
  }
});

  app.put("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, username, password, systemRole, team, status, role, email, phone, state } = req.body || {};
  const rows = await query("SELECT id FROM users WHERE id = ?", [id]);
  if (!rows[0]) return res.status(404).json({ error: "Not found" });

  if (username) {
    const existing = await query("SELECT id FROM users WHERE username = ? AND id != ?", [username, id]);
    if (existing.length) return res.status(409).json({ error: "Username exists" });
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

  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined) continue;
    await execute(`UPDATE users SET ${key} = ? WHERE id = ?`, [value, id]);
  }

  if (password) {
    const hash = bcrypt.hashSync(password, 10);
    await execute("UPDATE users SET password_hash = ? WHERE id = ?", [hash, id]);
  }

  res.json({ ok: true });
});

  app.delete("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  await execute("DELETE FROM users WHERE id = ?", [id]);
  res.json({ ok: true });
});

  app.get("/api/swaps", async (req, res) => {
  const rows = await query("SELECT * FROM swaps ORDER BY created_at DESC", []);
  res.json(rows);
});

  app.post("/api/swaps", async (req, res) => {
  const { requester, team, date, reason, status } = req.body || {};
  if (!requester || !team || !date) return res.status(400).json({ error: "Missing fields" });
  await execute(
    "INSERT INTO swaps (requester, team, date, reason, status, created_at) VALUES (?, ?, ?, ?, ?, ?)",
    [requester, team, date, reason || null, status || "offen", new Date().toISOString()]
  );
  res.json({ ok: true });
});

  app.put("/api/swaps/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body || {};
  if (!status) return res.status(400).json({ error: "Missing status" });
  await execute("UPDATE swaps SET status = ? WHERE id = ?", [status, id]);
  res.json({ ok: true });
});

  app.get("/api/shifts", async (req, res) => {
  const { userId, teamId, from, to } = req.query || {};
  if (!from || !to) return res.status(400).json({ error: "Missing range" });

  if (userId) {
    const rows = await query(
      "SELECT user_id, date, segments_json, status FROM shifts WHERE user_id = ? AND date BETWEEN ? AND ?",
      [Number(userId), from, to]
    );
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
    const rows = await query(
      `SELECT s.user_id, s.date, s.segments_json, s.status, u.name
       FROM shifts s
       JOIN users u ON u.id = s.user_id
       WHERE u.team = ? AND s.date BETWEEN ? AND ?`,
      [teamId, from, to]
    );
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

  app.post("/api/shifts", async (req, res) => {
  const { userId, date, segments, status } = req.body || {};
  if (!userId || !date || !segments) return res.status(400).json({ error: "Missing fields" });
  const json = JSON.stringify(segments);
  const statusValue = status || "Support";

  if (DB_CLIENT === "postgres") {
    await execute(
      "INSERT INTO shifts (user_id, date, segments_json, status) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, date) DO UPDATE SET segments_json = EXCLUDED.segments_json, status = EXCLUDED.status",
      [Number(userId), date, json, statusValue]
    );
  } else {
    await execute(
      "INSERT INTO shifts (user_id, date, segments_json, status) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE segments_json = VALUES(segments_json), status = VALUES(status)",
      [Number(userId), date, json, statusValue]
    );
  }

  res.json({ ok: true });
});

  app.delete("/api/shifts", async (req, res) => {
  const { userId, date } = req.body || {};
  if (!userId || !date) return res.status(400).json({ error: "Missing fields" });
  await execute("DELETE FROM shifts WHERE user_id = ? AND date = ?", [Number(userId), date]);
  res.json({ ok: true });
});

  app.listen(PORT, () => {
    console.log(`API listening on ${PORT}`);
  });
}
