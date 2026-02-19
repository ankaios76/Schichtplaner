#!/usr/bin/env bash
set -euo pipefail

if [[ $EUID -ne 0 ]]; then
  echo "Please run as root (sudo)." >&2
  exit 1
fi

APP_DIR="$(pwd)"
SERVER_DIR="$APP_DIR/server"

if [[ ! -f "$APP_DIR/index.html" || ! -d "$SERVER_DIR" ]]; then
  echo "Run this script from the repo root (where index.html and server/ exist)." >&2
  exit 1
fi

echo "==> Installing system packages"
apt-get update -y
apt-get install -y nginx nodejs npm sqlite3

echo "==> Installing server dependencies"
cd "$SERVER_DIR"
npm install

cd "$APP_DIR"
echo "==> Deploying frontend to /var/www/html"
mkdir -p /var/www/html
cp -r "$APP_DIR"/* /var/www/html/

echo "==> Configuring nginx (proxy /api to backend)"
cat >/etc/nginx/sites-available/default <<'NGINX'
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /var/www/html;
	index index.html index.htm index.nginx-debian.html;
	server_name _;

	location /api/ {
		proxy_pass http://127.0.0.1:3000;
		proxy_http_version 1.1;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}

	location / {
		try_files $uri $uri/ =404;
	}
}
NGINX

nginx -t
systemctl reload nginx

if [[ ! -f "$SERVER_DIR/.env.local" ]]; then
  echo "==> Creating server/.env.local"
  cat >"$SERVER_DIR/.env.local" <<'ENV'
SUPERVISOR_USERNAME=admin
SUPERVISOR_PASSWORD=change_me
PORT=3000
DB_PATH=./data.db
ENV
  echo "Please update server/.env.local with secure credentials."
fi

echo "==> Creating systemd service"
cat >/etc/systemd/system/sp-pln.service <<SERVICE
[Unit]
Description=SP-PLN API Server
After=network.target

[Service]
Type=simple
WorkingDirectory=$SERVER_DIR
EnvironmentFile=$SERVER_DIR/.env.local
ExecStart=/usr/bin/node $SERVER_DIR/index.js
Restart=on-failure
RestartSec=3

[Install]
WantedBy=multi-user.target
SERVICE

systemctl daemon-reload
systemctl enable --now sp-pln.service

echo "==> Done"
echo "Open http://SERVER_IP/ for first-time setup."
