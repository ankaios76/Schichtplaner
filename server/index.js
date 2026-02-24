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
import os from "os";

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
        subteam TEXT,
        status TEXT NOT NULL,
        role_title TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        state TEXT,
        avatar TEXT,
        oncall_type TEXT
      );
      CREATE TABLE IF NOT EXISTS hierarchy_nodes (
        id SERIAL PRIMARY KEY,
        parent_id INTEGER,
        type TEXT NOT NULL,
        name TEXT NOT NULL,
        sort_order INTEGER NOT NULL DEFAULT 0,
        core_start TEXT,
        core_end TEXT,
        oncall_core TEXT,
        swaps_enabled BOOLEAN
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
      CREATE TABLE IF NOT EXISTS oncall_swaps (
        id SERIAL PRIMARY KEY,
        requester_id INTEGER NOT NULL,
        requester_name TEXT NOT NULL,
        responder_id INTEGER,
        responder_name TEXT,
        team TEXT NOT NULL,
        date DATE NOT NULL,
        oncall_type TEXT NOT NULL,
        oncall_priority TEXT,
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
      CREATE TABLE IF NOT EXISTS oncall_shifts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        date DATE NOT NULL,
        segments_json TEXT NOT NULL,
        status TEXT,
        oncall_type TEXT,
        oncall_priority TEXT,
        UNIQUE(user_id, date, oncall_type)
      );
      CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY,
        company_name TEXT,
        logo TEXT,
        accent TEXT,
        accent_secondary TEXT,
        holiday_overrides TEXT,
        activity_options TEXT,
        oncall_options TEXT,
        footer_text TEXT
      );
    `);
    await execFn(
      "INSERT INTO settings (id, company_name, logo) VALUES (1, NULL, NULL) ON CONFLICT (id) DO NOTHING"
    );
    await execFn(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='settings' AND column_name='accent') THEN
          ALTER TABLE settings ADD COLUMN accent TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='settings' AND column_name='accent_secondary') THEN
          ALTER TABLE settings ADD COLUMN accent_secondary TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='settings' AND column_name='holiday_overrides') THEN
          ALTER TABLE settings ADD COLUMN holiday_overrides TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='settings' AND column_name='activity_options') THEN
          ALTER TABLE settings ADD COLUMN activity_options TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='settings' AND column_name='oncall_options') THEN
          ALTER TABLE settings ADD COLUMN oncall_options TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='settings' AND column_name='footer_text') THEN
          ALTER TABLE settings ADD COLUMN footer_text TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='oncall_swaps' AND column_name='oncall_priority') THEN
          ALTER TABLE oncall_swaps ADD COLUMN oncall_priority TEXT;
        END IF;
      END $$;
    `);
    await execFn(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='hierarchy_nodes' AND column_name='core_start') THEN
          ALTER TABLE hierarchy_nodes ADD COLUMN core_start TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='hierarchy_nodes' AND column_name='core_end') THEN
          ALTER TABLE hierarchy_nodes ADD COLUMN core_end TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='hierarchy_nodes' AND column_name='oncall_core') THEN
          ALTER TABLE hierarchy_nodes ADD COLUMN oncall_core TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='hierarchy_nodes' AND column_name='swaps_enabled') THEN
          ALTER TABLE hierarchy_nodes ADD COLUMN swaps_enabled BOOLEAN;
        END IF;
      END $$;
    `);
    await execFn(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='avatar') THEN
          ALTER TABLE users ADD COLUMN avatar TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='oncall_type') THEN
          ALTER TABLE users ADD COLUMN oncall_type TEXT;
        END IF;
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='subteam') THEN
          ALTER TABLE users ADD COLUMN subteam TEXT;
        END IF;
      END $$;
    `);
    await execFn(`
      CREATE TABLE IF NOT EXISTS oncall_shifts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        date DATE NOT NULL,
        segments_json TEXT NOT NULL,
        status TEXT,
        oncall_type TEXT,
        oncall_priority TEXT,
        UNIQUE(user_id, date, oncall_type)
      );
    `);
    await execFn("ALTER TABLE oncall_shifts ADD COLUMN IF NOT EXISTS oncall_type TEXT");
    await execFn("ALTER TABLE oncall_shifts ADD COLUMN IF NOT EXISTS oncall_priority TEXT");
    await execFn("UPDATE oncall_shifts SET oncall_type = status WHERE oncall_type IS NULL");
    await execFn("ALTER TABLE oncall_shifts DROP CONSTRAINT IF EXISTS oncall_shifts_user_id_date_key");
    await execFn(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'oncall_shifts_user_id_date_oncall_key') THEN
          ALTER TABLE oncall_shifts ADD CONSTRAINT oncall_shifts_user_id_date_oncall_key UNIQUE (user_id, date, oncall_type);
        END IF;
      END $$;
    `);
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
      subteam VARCHAR(255),
      status VARCHAR(50) NOT NULL,
      role_title VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      phone VARCHAR(255),
      state VARCHAR(50),
      avatar LONGTEXT,
      oncall_type VARCHAR(255)
    );
  `);
  await execFn(`
    CREATE TABLE IF NOT EXISTS hierarchy_nodes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      parent_id INT NULL,
      type VARCHAR(50) NOT NULL,
      name VARCHAR(255) NOT NULL,
      sort_order INT NOT NULL DEFAULT 0,
      core_start VARCHAR(16),
      core_end VARCHAR(16),
      oncall_core LONGTEXT,
      swaps_enabled BOOLEAN
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
    CREATE TABLE IF NOT EXISTS oncall_swaps (
      id INT AUTO_INCREMENT PRIMARY KEY,
      requester_id INT NOT NULL,
      requester_name VARCHAR(255) NOT NULL,
      responder_id INT NULL,
      responder_name VARCHAR(255) NULL,
      team VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      oncall_type VARCHAR(255) NOT NULL,
      oncall_priority VARCHAR(255),
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
    CREATE TABLE IF NOT EXISTS oncall_shifts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      date DATE NOT NULL,
      segments_json TEXT NOT NULL,
      status VARCHAR(50),
      oncall_type VARCHAR(255),
      oncall_priority VARCHAR(255),
      UNIQUE KEY uniq_oncall_user_date_type (user_id, date, oncall_type)
    );
  `);
  await execFn(`
    CREATE TABLE IF NOT EXISTS settings (
      id INT PRIMARY KEY,
      company_name VARCHAR(255),
      logo LONGTEXT,
      accent VARCHAR(32),
      accent_secondary VARCHAR(32),
      holiday_overrides LONGTEXT,
      activity_options LONGTEXT,
      oncall_options LONGTEXT,
      footer_text TEXT
    );
  `);
  await execFn("INSERT IGNORE INTO settings (id, company_name, logo) VALUES (1, NULL, NULL)");
  try {
    await execFn("ALTER TABLE settings ADD COLUMN IF NOT EXISTS accent VARCHAR(32)");
  } catch {}
  try {
    await execFn("ALTER TABLE settings ADD COLUMN IF NOT EXISTS accent_secondary VARCHAR(32)");
  } catch {}
  try {
    await execFn("ALTER TABLE settings ADD COLUMN IF NOT EXISTS holiday_overrides LONGTEXT");
  } catch {}
  try {
    await execFn("ALTER TABLE settings ADD COLUMN IF NOT EXISTS activity_options LONGTEXT");
  } catch {}
  try {
    await execFn("ALTER TABLE settings ADD COLUMN IF NOT EXISTS oncall_options LONGTEXT");
  } catch {}
  try {
    await execFn("ALTER TABLE settings ADD COLUMN IF NOT EXISTS footer_text TEXT");
  } catch {}
  try {
    await execFn("ALTER TABLE oncall_swaps ADD COLUMN IF NOT EXISTS oncall_priority VARCHAR(255)");
  } catch {}
  try {
    await execFn("ALTER TABLE hierarchy_nodes ADD COLUMN IF NOT EXISTS core_start VARCHAR(16)");
  } catch {}
  try {
    await execFn("ALTER TABLE hierarchy_nodes ADD COLUMN IF NOT EXISTS core_end VARCHAR(16)");
  } catch {}
  try {
    await execFn("ALTER TABLE hierarchy_nodes ADD COLUMN IF NOT EXISTS oncall_core LONGTEXT");
  } catch {}
  try {
    await execFn("ALTER TABLE hierarchy_nodes ADD COLUMN IF NOT EXISTS swaps_enabled BOOLEAN");
  } catch {}
  try {
    await execFn("ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar LONGTEXT");
  } catch {}
  try {
    await execFn("ALTER TABLE users ADD COLUMN IF NOT EXISTS oncall_type VARCHAR(255)");
  } catch {}
  try {
    await execFn("ALTER TABLE users ADD COLUMN IF NOT EXISTS subteam VARCHAR(255)");
  } catch {}
  try {
    await execFn("ALTER TABLE oncall_shifts ADD COLUMN IF NOT EXISTS oncall_type VARCHAR(255)");
  } catch {}
  try {
    await execFn("ALTER TABLE oncall_shifts ADD COLUMN IF NOT EXISTS oncall_priority VARCHAR(255)");
  } catch {}
  try {
    await execFn("UPDATE oncall_shifts SET oncall_type = status WHERE oncall_type IS NULL");
  } catch {}
  try {
    await execFn("ALTER TABLE oncall_shifts DROP INDEX uniq_oncall_user_date");
  } catch {}
  try {
    await execFn("ALTER TABLE oncall_shifts ADD UNIQUE KEY uniq_oncall_user_date_type (user_id, date, oncall_type)");
  } catch {}
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

function formatDateGerman(value) {
  const [y, m, d] = value.split("-").map(Number);
  return `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}`;
}

function weekdayGerman(value) {
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const names = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  return names[date.getDay()];
}

function buildDateRange(from, to) {
  const [fy, fm, fd] = from.split("-").map(Number);
  const [ty, tm, td] = to.split("-").map(Number);
  const start = new Date(fy, fm - 1, fd);
  const end = new Date(ty, tm - 1, td);
  const out = [];
  const current = new Date(start);
  while (current <= end) {
    const key = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, "0")}-${String(
      current.getDate()
    ).padStart(2, "0")}`;
    out.push(key);
    current.setDate(current.getDate() + 1);
  }
  return out;
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
    const { companyName, logo, accent } = req.body || {};
    if (!companyName) return res.status(400).json({ error: "Missing company name" });
    writeBootstrap({ companyName, logo: logo || null, accent: accent || null });
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
            "INSERT INTO settings (id, company_name, logo, accent) VALUES (1, $1, $2, $3) ON CONFLICT (id) DO UPDATE SET company_name = EXCLUDED.company_name, logo = EXCLUDED.logo, accent = EXCLUDED.accent",
            [bootstrap.companyName, bootstrap.logo, bootstrap.accent || null]
          );
        }
        await temp.end();
      } else {
        const temp = await mysql.createConnection({ host, port, user, password, database: name });
        await createSchemaWith("mysql", async (sql) => temp.query(sql));
        if (bootstrap.companyName) {
          await temp.query(
            "INSERT INTO settings (id, company_name, logo, accent) VALUES (1, ?, ?, ?) ON DUPLICATE KEY UPDATE company_name = VALUES(company_name), logo = VALUES(logo), accent = VALUES(accent)",
            [bootstrap.companyName, bootstrap.logo, bootstrap.accent || null]
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
    "SELECT id, name, username, password_hash, system_role, team, subteam, status, role_title, email, phone, state, avatar, oncall_type FROM users WHERE username = ?",
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
    subteam: user.subteam,
    status: user.status,
    role: user.role_title,
    email: user.email,
    phone: user.phone,
    state: user.state,
    avatar: user.avatar,
    oncallType: (() => {
      const raw = user.oncall_type || null;
      if (typeof raw === "string" && raw.trim().startsWith("[")) {
        try {
          return JSON.parse(raw);
        } catch {
          return raw;
        }
      }
      return raw;
    })(),
  });
});

  app.get("/api/settings", async (req, res) => {
    const rows = await query(
      "SELECT company_name, logo, accent, accent_secondary, holiday_overrides, activity_options, oncall_options, footer_text FROM settings WHERE id = 1",
      []
    );
    const row = rows[0] || {};
    res.json({
      companyName: row.company_name || null,
      logo: row.logo || null,
      accent: row.accent || null,
      accentSecondary: row.accent_secondary || null,
      holidayOverrides: row.holiday_overrides ? JSON.parse(row.holiday_overrides) : {},
      activityOptions: row.activity_options ? JSON.parse(row.activity_options) : null,
      oncallOptions: row.oncall_options ? JSON.parse(row.oncall_options) : null,
      footerText: row.footer_text || null,
      hasSupervisor: await hasSupervisor(),
    });
  });

  app.post("/api/settings", async (req, res) => {
    const { companyName, logo, accent, accentSecondary, holidayOverrides, activityOptions, oncallOptions, footerText } = req.body || {};
    if (!companyName) return res.status(400).json({ error: "Missing company name" });
    const overridesJson = holidayOverrides ? JSON.stringify(holidayOverrides) : null;
    const activityJson = activityOptions ? JSON.stringify(activityOptions) : null;
    const oncallJson = oncallOptions ? JSON.stringify(oncallOptions) : null;
    await execute(
      "UPDATE settings SET company_name = ?, logo = ?, accent = ?, accent_secondary = ?, holiday_overrides = ?, activity_options = ?, oncall_options = ?, footer_text = ? WHERE id = 1",
      [
        companyName,
        logo || null,
        accent || null,
        accentSecondary || null,
        overridesJson,
        activityJson,
        oncallJson,
        footerText || null,
      ]
    );
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
  const { name, coreStart, coreEnd, oncallCore, swapsEnabled } = req.body || {};
  const id = Number(req.params.id);
  const rows = await query("SELECT id, type FROM hierarchy_nodes WHERE id = ?", [id]);
  if (!rows[0]) return res.status(404).json({ error: "Not found" });

  if (name) {
    await execute("UPDATE hierarchy_nodes SET name = ? WHERE id = ?", [name, id]);
  }
  if (rows[0].type === "team" && (coreStart || coreEnd)) {
    await execute("UPDATE hierarchy_nodes SET core_start = ?, core_end = ? WHERE id = ?", [
      coreStart || null,
      coreEnd || null,
      id,
    ]);
  }
  if (rows[0].type === "team" && oncallCore) {
    const json = typeof oncallCore === "string" ? oncallCore : JSON.stringify(oncallCore);
    await execute("UPDATE hierarchy_nodes SET oncall_core = ? WHERE id = ?", [json, id]);
  }
  if (rows[0].type === "team" && swapsEnabled !== undefined) {
    await execute("UPDATE hierarchy_nodes SET swaps_enabled = ? WHERE id = ?", [swapsEnabled ? 1 : 0, id]);
  }
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
    "SELECT id, name, username, system_role, team, subteam, status, role_title, email, phone, state, avatar, oncall_type FROM users",
    []
  );
  res.json(
    rows.map((u) => {
      let oncall = u.oncall_type;
      if (typeof oncall === "string" && oncall.trim().startsWith("[")) {
        try {
          oncall = JSON.parse(oncall);
        } catch {}
      }
      return ({
      id: u.id,
      name: u.name,
      username: u.username,
      systemRole: u.system_role,
      team: u.team,
      subteam: u.subteam,
      status: u.status,
      role: u.role_title,
      email: u.email,
      phone: u.phone,
      state: u.state,
      avatar: u.avatar,
      oncallType: oncall,
    });
    })
  );
});

  app.post("/api/users", async (req, res) => {
  const { name, username, password, systemRole, team, subteam, status, role, email, phone, state, avatar, oncallType } = req.body || {};
  if (!name || !username || !password || !systemRole || !team || !status) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const roleValue = role || "Mitarbeiter";
  const hash = bcrypt.hashSync(password, 10);
  try {
    const oncallValue = Array.isArray(oncallType) ? JSON.stringify(oncallType) : oncallType || null;
    await execute(
      "INSERT INTO users (name, username, password_hash, system_role, team, subteam, status, role_title, email, phone, state, avatar, oncall_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        username,
        hash,
        systemRole,
        team,
        subteam || null,
        status,
        roleValue,
        email || null,
        phone || null,
        state || null,
        avatar || null,
        oncallValue,
      ]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(409).json({ error: "Username exists" });
  }
});

  app.put("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, username, password, systemRole, team, subteam, status, role, email, phone, state, avatar, oncallType } = req.body || {};
  const rows = await query("SELECT id FROM users WHERE id = ?", [id]);
  if (!rows[0]) return res.status(404).json({ error: "Not found" });

  if (username) {
    const existing = await query("SELECT id FROM users WHERE username = ? AND id != ?", [username, id]);
    if (existing.length) return res.status(409).json({ error: "Username exists" });
  }

  const oncallValue = Array.isArray(oncallType) ? JSON.stringify(oncallType) : oncallType;
  const fields = {
    name,
    username,
    system_role: systemRole,
    team,
    subteam,
    status,
    role_title: role || undefined,
    email,
    phone,
    state,
    avatar,
    oncall_type: oncallValue,
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

  app.get("/api/oncall_swaps", async (req, res) => {
  const rows = await query("SELECT * FROM oncall_swaps ORDER BY created_at DESC", []);
  res.json(
    rows.map((row) => ({
      id: row.id,
      requesterId: row.requester_id,
      requesterName: row.requester_name,
      responderId: row.responder_id,
      responderName: row.responder_name,
      team: row.team,
      date: row.date,
      oncallType: row.oncall_type,
      oncallPriority: row.oncall_priority,
      reason: row.reason,
      status: row.status,
      createdAt: row.created_at,
    }))
  );
});

  app.post("/api/oncall_swaps", async (req, res) => {
  const { requesterId, date, oncallType, oncallPriority, reason } = req.body || {};
  if (!requesterId || !date || !oncallType) return res.status(400).json({ error: "Missing fields" });
  const users = await query("SELECT id, name, team FROM users WHERE id = ?", [Number(requesterId)]);
  const requester = users[0];
  if (!requester) return res.status(404).json({ error: "Requester not found" });
  await execute(
    "INSERT INTO oncall_swaps (requester_id, requester_name, team, date, oncall_type, oncall_priority, reason, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      requester.id,
      requester.name,
      requester.team,
      date,
      oncallType,
      oncallPriority || null,
      reason || null,
      "offen",
      new Date().toISOString(),
    ]
  );
  res.json({ ok: true });
});

  app.put("/api/oncall_swaps/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { status, responderId } = req.body || {};
  if (!status) return res.status(400).json({ error: "Missing status" });
  const rows = await query("SELECT * FROM oncall_swaps WHERE id = ?", [id]);
  const request = rows[0];
  if (!request) return res.status(404).json({ error: "Not found" });
  if (status === "angenommen") {
    if (!responderId) return res.status(400).json({ error: "Missing responderId" });
    const responderRows = await query("SELECT id, name, oncall_type FROM users WHERE id = ?", [Number(responderId)]);
    const responder = responderRows[0];
    if (!responder) return res.status(404).json({ error: "Responder not found" });
    const rawType = responder.oncall_type || null;
    let types = [];
    if (typeof rawType === "string" && rawType.trim().startsWith("[")) {
      try {
        types = JSON.parse(rawType);
      } catch {
        types = [rawType];
      }
    } else if (rawType) {
      types = [rawType];
    }
    if (!types.includes(request.oncall_type)) {
      return res.status(400).json({ error: "Responder not assigned to oncall type" });
    }

    const shiftRows = await query(
      "SELECT segments_json, status, oncall_type, oncall_priority FROM oncall_shifts WHERE user_id = ? AND date = ? AND oncall_type = ?",
      [request.requester_id, request.date, request.oncall_type]
    );
    const shift = shiftRows[0];
    if (!shift) return res.status(404).json({ error: "Oncall shift not found" });

    await execute("DELETE FROM oncall_shifts WHERE user_id = ? AND date = ? AND oncall_type = ?", [
      Number(responderId),
      request.date,
      request.oncall_type,
    ]);
    await execute(
      "INSERT INTO oncall_shifts (user_id, date, segments_json, status, oncall_type, oncall_priority) VALUES (?, ?, ?, ?, ?, ?)",
      [
        Number(responderId),
        request.date,
        shift.segments_json,
        shift.status || request.oncall_type,
        request.oncall_type,
        shift.oncall_priority || request.oncall_priority,
      ]
    );
    await execute("DELETE FROM oncall_shifts WHERE user_id = ? AND date = ? AND oncall_type = ?", [
      request.requester_id,
      request.date,
      request.oncall_type,
    ]);

    await execute("UPDATE oncall_swaps SET status = ?, responder_id = ?, responder_name = ? WHERE id = ?", [
      status,
      responder.id,
      responder.name,
      id,
    ]);
    return res.json({ ok: true });
  }

  await execute("UPDATE oncall_swaps SET status = ? WHERE id = ?", [status, id]);
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

app.get("/api/oncall_shifts", async (req, res) => {
  const { userId, teamId, from, to } = req.query || {};
  if (!from || !to) return res.status(400).json({ error: "Missing range" });

  if (userId) {
    const rows = await query(
      "SELECT user_id, date, segments_json, status, oncall_type, oncall_priority FROM oncall_shifts WHERE user_id = ? AND date BETWEEN ? AND ?",
      [Number(userId), from, to]
    );
    return res.json(
      rows.map((row) => ({
        userId: row.user_id,
        date: row.date,
        segments: JSON.parse(row.segments_json),
        status: row.oncall_type || row.status || "Keine Rufbereitschaft",
        oncallType: row.oncall_type || row.status || "Keine Rufbereitschaft",
        oncallPriority: row.oncall_priority || null,
      }))
    );
  }

  if (teamId) {
    const rows = await query(
      `SELECT s.user_id, s.date, s.segments_json, s.status, s.oncall_type, s.oncall_priority, u.name
       FROM oncall_shifts s
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
        status: row.oncall_type || row.status || "Keine Rufbereitschaft",
        oncallType: row.oncall_type || row.status || "Keine Rufbereitschaft",
        oncallPriority: row.oncall_priority || null,
      }))
    );
  }

  return res.status(400).json({ error: "Missing filter" });
});

app.post("/api/oncall_shifts", async (req, res) => {
  const { userId, date, segments, status, oncallType, oncallPriority } = req.body || {};
  if (!userId || !date || !segments) return res.status(400).json({ error: "Missing fields" });
  const json = JSON.stringify(segments);
  const statusValue = oncallType || status || "Keine Rufbereitschaft";
  const oncallValue = oncallType || status || "Keine Rufbereitschaft";
  const priorityValue = oncallPriority || null;

  if (DB_CLIENT === "postgres") {
    await execute(
      "INSERT INTO oncall_shifts (user_id, date, segments_json, status, oncall_type, oncall_priority) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(user_id, date, oncall_type) DO UPDATE SET segments_json = EXCLUDED.segments_json, status = EXCLUDED.status, oncall_priority = EXCLUDED.oncall_priority",
      [Number(userId), date, json, statusValue, oncallValue, priorityValue]
    );
  } else {
    await execute(
      "INSERT INTO oncall_shifts (user_id, date, segments_json, status, oncall_type, oncall_priority) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE segments_json = VALUES(segments_json), status = VALUES(status), oncall_type = VALUES(oncall_type), oncall_priority = VALUES(oncall_priority)",
      [Number(userId), date, json, statusValue, oncallValue, priorityValue]
    );
  }

  res.json({ ok: true });
});

app.delete("/api/oncall_shifts", async (req, res) => {
  const { userId, date, oncallType } = req.body || {};
  if (!userId || !date) return res.status(400).json({ error: "Missing fields" });
  if (oncallType) {
    await execute("DELETE FROM oncall_shifts WHERE user_id = ? AND date = ? AND oncall_type = ?", [
      Number(userId),
      date,
      oncallType,
    ]);
  } else {
    await execute("DELETE FROM oncall_shifts WHERE user_id = ? AND date = ?", [Number(userId), date]);
  }
  res.json({ ok: true });
});

app.get("/api/shiftplan/pdf", async (req, res) => {
  const { userId, from, to } = req.query || {};
  if (!userId || !from || !to) return res.status(400).json({ error: "Missing fields" });

  const userRows = await query("SELECT id, name FROM users WHERE id = ?", [Number(userId)]);
  if (!userRows[0]) return res.status(404).json({ error: "User not found" });
  const userName = userRows[0].name;

  const settingRows = await query("SELECT company_name, logo FROM settings WHERE id = 1", []);
  const companyName = settingRows[0]?.company_name || "Schichtplaner";
  const logoData = settingRows[0]?.logo || "";

  const shiftRows = await query(
    "SELECT date, segments_json, status FROM shifts WHERE user_id = ? AND date BETWEEN ? AND ?",
    [Number(userId), from, to]
  );
  const shiftMap = new Map();
  shiftRows.forEach((row) => {
    const segments = JSON.parse(row.segments_json || "[]");
    shiftMap.set(row.date, { segments, status: row.status || "Support" });
  });

  const rangeDates = buildDateRange(from, to);
  const rows = rangeDates.map((dateKey) => {
    const entry = shiftMap.get(dateKey);
    if (!entry || !entry.segments || !entry.segments.length) {
      return {
        date: dateKey,
        weekday: weekdayGerman(dateKey),
        times: "Keine Arbeitszeit",
        status: "Keine",
      };
    }
    const times = entry.segments.map((seg) => `${seg.start}-${seg.end}`).join(", ");
    return {
      date: dateKey,
      weekday: weekdayGerman(dateKey),
      times,
      status: entry.status || "Support",
    };
  });

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "sp-pln-"));
  let logoPath = "";
  if (logoData && logoData.startsWith("data:image/") && logoData.includes(";base64,")) {
    const [meta, b64] = logoData.split(";base64,");
    const mime = meta.replace("data:", "");
    let ext = "png";
    if (mime === "image/jpeg" || mime === "image/jpg") ext = "jpg";
    if (mime === "image/svg+xml") ext = "svg";
    logoPath = path.join(tmpDir, `logo.${ext}`);
    fs.writeFileSync(logoPath, Buffer.from(b64, "base64"));
  }

  const mdPath = path.join(tmpDir, "plan.md");
  const pdfPath = path.join(tmpDir, "plan.pdf");
  const header = [];
  if (logoPath) header.push(`![Logo](${logoPath}){width=120px}`);
  header.push(`**${companyName}**`);
  header.push("");
  header.push(`# Schichtplan`);
  header.push(`**Mitarbeiter:** ${userName}`);
  header.push(`**Zeitraum:** ${formatDateGerman(from)} – ${formatDateGerman(to)}`);
  header.push("");

  const tableHeader = ["| Datum | Wochentag | Zeiten | Status |", "| --- | --- | --- | --- |"];
  const tableRows = rows.map(
    (row) => `| ${formatDateGerman(row.date)} | ${row.weekday} | ${row.times} | ${row.status} |`
  );

  fs.writeFileSync(mdPath, [...header, ...tableHeader, ...tableRows].join("\n"));

  try {
    execSync(`pandoc "${mdPath}" --pdf-engine=xelatex -V mainfont=Arial -V geometry:margin=1in -o "${pdfPath}"`);
    const pdf = fs.readFileSync(pdfPath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="Schichtplan_${from}_${to}.pdf"`);
    res.send(pdf);
  } catch (err) {
    res.status(500).json({ error: "PDF generation failed" });
  } finally {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (e) {
      // ignore
    }
  }
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
