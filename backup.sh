#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DB_PATH="$APP_DIR/server/data.db"
BACKUP_DIR="$APP_DIR/backups"
TS="$(date +%Y%m%d_%H%M%S)"

if [[ ! -f "$DB_PATH" ]]; then
  echo "Database not found at $DB_PATH" >&2
  exit 1
fi

mkdir -p "$BACKUP_DIR"
cp "$DB_PATH" "$BACKUP_DIR/data_$TS.db"

echo "Backup created: $BACKUP_DIR/data_$TS.db"
