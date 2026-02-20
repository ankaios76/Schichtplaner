#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$APP_DIR/server/.env.local"
BACKUP_DIR="$APP_DIR/backups"
TS="$(date +%Y%m%d_%H%M%S)"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing $ENV_FILE" >&2
  exit 1
fi

# shellcheck disable=SC1090
source "$ENV_FILE"

mkdir -p "$BACKUP_DIR"

if [[ "$DB_CLIENT" == "postgres" ]]; then
  export PGPASSWORD="$DB_PASSWORD"
  pg_dump -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" "$DB_NAME" >"$BACKUP_DIR/pg_$TS.sql"
  echo "Backup created: $BACKUP_DIR/pg_$TS.sql"
  exit 0
fi

if [[ "$DB_CLIENT" == "mysql" ]]; then
  mysqldump -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" >"$BACKUP_DIR/mysql_$TS.sql"
  echo "Backup created: $BACKUP_DIR/mysql_$TS.sql"
  exit 0
fi

echo "Unsupported DB_CLIENT: $DB_CLIENT" >&2
exit 1
