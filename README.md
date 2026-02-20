# Schichtplaner

## Installation (neuer Server)
```bash
sudo apt-get update -y
sudo apt-get install -y git

git clone https://github.com/ankaios76/Schichtplaner.git
cd Schichtplaner
sudo bash install.sh
```

Der Installer installiert Frontend, Backend sowie PostgreSQL + MySQL lokal.
Die Datenbank-Konfiguration erfolgt im Browser unter `http://SERVER_IP/` während der Ersteinrichtung.

## Updates deployen
```bash
sudo bash deploy.sh
```

## Backup erstellen
```bash
sudo bash backup.sh
```

## Hinweise
- Backend läuft als `sp-pln.service`.
- Einstellungen liegen in `server/.env.local`.
- Datenbankverbindung wird über `.env.local` gesteuert.
