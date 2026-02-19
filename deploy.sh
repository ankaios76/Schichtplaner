#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$APP_DIR/server"

if [[ $EUID -ne 0 ]]; then
  echo "Please run as root (sudo)." >&2
  exit 1
fi

cd "$APP_DIR"

echo "==> Pulling latest changes"
GIT_SSH_COMMAND="ssh" git pull --rebase

echo "==> Installing server dependencies"
cd "$SERVER_DIR"
npm install

cd "$APP_DIR"
echo "==> Deploying frontend to /var/www/html"
cp -r "$APP_DIR"/* /var/www/html/

systemctl restart sp-pln.service
systemctl reload nginx

echo "==> Done"
