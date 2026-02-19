# Schichtplaner

## Installation (neuer Server)
```bash
sudo apt-get update -y
sudo apt-get install -y git

git clone git@github.com:ankaios76/Schichtplaner.git
cd Schichtplaner
sudo bash install.sh
```

Danach im Browser `http://SERVER_IP/` öffnen und Ersteinrichtung durchführen.

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
- Datenbank: `server/data.db` (nicht im Repo).
