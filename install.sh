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

echo "==> Installing base packages"
apt-get update -y
apt-get install -y nginx nodejs npm

read -r -p "Database type (1=PostgreSQL local, 2=MySQL local, 3=PostgreSQL external, 4=MySQL external): " DB_CHOICE

DB_CLIENT=""
DB_HOST="127.0.0.1"
DB_PORT=""
DB_USER="sp_pln"
DB_PASSWORD=""
DB_NAME="sp_pln"

if [[ "$DB_CHOICE" == "1" ]]; then
  DB_CLIENT="postgres"
  DB_PORT=5432
  apt-get install -y postgresql
  read -r -p "PostgreSQL DB name [sp_pln]: " input
  DB_NAME=${input:-sp_pln}
  read -r -p "PostgreSQL user [sp_pln]: " input
  DB_USER=${input:-sp_pln}
  read -r -s -p "PostgreSQL password: " DB_PASSWORD
  echo
  sudo -u postgres psql -c "CREATE DATABASE ${DB_NAME};" || true
  sudo -u postgres psql -c "CREATE USER ${DB_USER} WITH PASSWORD '${DB_PASSWORD}';" || true
  sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};" || true
elif [[ "$DB_CHOICE" == "2" ]]; then
  DB_CLIENT="mysql"
  DB_PORT=3306
  apt-get install -y mysql-server
  read -r -p "MySQL DB name [sp_pln]: " input
  DB_NAME=${input:-sp_pln}
  read -r -p "MySQL user [sp_pln]: " input
  DB_USER=${input:-sp_pln}
  read -r -s -p "MySQL password: " DB_PASSWORD
  echo
  mysql -uroot -e "CREATE DATABASE IF NOT EXISTS ${DB_NAME};" || true
  mysql -uroot -e "CREATE USER IF NOT EXISTS '${DB_USER}'@'%' IDENTIFIED BY '${DB_PASSWORD}';" || true
  mysql -uroot -e "GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USER}'@'%';" || true
elif [[ "$DB_CHOICE" == "3" ]]; then
  DB_CLIENT="postgres"
  DB_PORT=5432
  read -r -p "PostgreSQL host: " DB_HOST
  read -r -p "PostgreSQL port [5432]: " input
  DB_PORT=${input:-5432}
  read -r -p "PostgreSQL DB name: " DB_NAME
  read -r -p "PostgreSQL user: " DB_USER
  read -r -s -p "PostgreSQL password: " DB_PASSWORD
  echo
elif [[ "$DB_CHOICE" == "4" ]]; then
  DB_CLIENT="mysql"
  DB_PORT=3306
  read -r -p "MySQL host: " DB_HOST
  read -r -p "MySQL port [3306]: " input
  DB_PORT=${input:-3306}
  read -r -p "MySQL DB name: " DB_NAME
  read -r -p "MySQL user: " DB_USER
  read -r -s -p "MySQL password: " DB_PASSWORD
  echo
else
  echo "Invalid choice." >&2
  exit 1
fi

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

cat >"$SERVER_DIR/.env.local" <<ENV
PORT=3000
DB_CLIENT=${DB_CLIENT}
DB_HOST=${DB_HOST}
DB_PORT=${DB_PORT}
DB_USER=${DB_USER}
DB_PASSWORD=${DB_PASSWORD}
DB_NAME=${DB_NAME}
ENV


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
