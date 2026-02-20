#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS_DIR="$ROOT_DIR/docs"
DB_PATH="$ROOT_DIR/server/data.db"

COMPANY_NAME="${COMPANY_NAME:-}"
COMPANY_LOGO="${COMPANY_LOGO:-}"
TMP_LOGO=""

if [ -z "$COMPANY_NAME" ] && [ -f "$DB_PATH" ] && command -v sqlite3 >/dev/null 2>&1; then
  COMPANY_NAME=$(sqlite3 "$DB_PATH" "select company_name from settings where id=1;" | tr -d '\r' || true)
fi

if [ -z "$COMPANY_NAME" ]; then
  COMPANY_NAME="Schichtplaner"
fi

if [ -z "$COMPANY_LOGO" ] && [ -f "$DOCS_DIR/company-logo.png" ]; then
  COMPANY_LOGO="$DOCS_DIR/company-logo.png"
fi

LOGO_DATA=""
if [ -z "$COMPANY_LOGO" ] && [ -f "$DB_PATH" ] && command -v sqlite3 >/dev/null 2>&1; then
  LOGO_DATA=$(sqlite3 "$DB_PATH" "select logo from settings where id=1;" | tr -d '\r' || true)
fi

if [ -z "$LOGO_DATA" ] && command -v curl >/dev/null 2>&1; then
  set +o pipefail
  for url in http://127.0.0.1/api/settings http://127.0.0.1:3000/api/settings; do
    LOGO_DATA=$(curl -fsS "$url" 2>/dev/null | python3 - <<'PY'
import json, sys
try:
  data = json.load(sys.stdin)
  print(data.get("logo",""))
except Exception:
  pass
PY
    )
    if [ -n "$LOGO_DATA" ]; then
      break
    fi
  done
  set -o pipefail
fi

if [ -z "$COMPANY_LOGO" ]; then
  case "$LOGO_DATA" in
    data:image/*\;base64,*)
    TMP_LOGO="$(mktemp --suffix=.png)"
    python3 - <<'PY'
import os, sys, base64
data = os.environ.get("LOGO_DATA","")
if ";base64," in data:
  b64 = data.split(";base64,",1)[1]
  try:
    raw = base64.b64decode(b64)
    path = os.environ.get("TMP_LOGO","")
    if path:
      with open(path,"wb") as f:
        f.write(raw)
  except Exception:
    pass
PY
    COMPANY_LOGO="$TMP_LOGO"
    ;;
  esac
fi

if ! command -v pandoc >/dev/null 2>&1; then
  echo "pandoc not found. Please install pandoc first." >&2
  exit 1
fi

if ! command -v xelatex >/dev/null 2>&1; then
  echo "xelatex not found. Please install texlive-xetex first." >&2
  exit 1
fi

build_pdf() {
  local role="$1"
  local source="$DOCS_DIR/onepager-${role}.md"
  local out="$DOCS_DIR/onepager-${role}.pdf"
  local tmp
  tmp=$(mktemp --suffix=.md)

  {
    if [ -n "$COMPANY_LOGO" ] && [ -f "$COMPANY_LOGO" ]; then
      echo "![Logo](${COMPANY_LOGO}){width=120px}"
      echo
    fi
    echo "**${COMPANY_NAME}**"
    echo
    echo "---"
    echo
    cat "$source"
  } > "$tmp"

  pandoc "$tmp" \
    --pdf-engine=xelatex \
    -V mainfont=Arial \
    -V geometry:margin=1in \
    -o "$out"

  rm -f "$tmp"
}

build_pdf "supervisor"
build_pdf "teamleiter"
build_pdf "benutzer"

if [ -n "$TMP_LOGO" ] && [ -f "$TMP_LOGO" ]; then
  rm -f "$TMP_LOGO"
fi

echo "PDFs generated in $DOCS_DIR"
