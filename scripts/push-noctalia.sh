#!/usr/bin/env bash
# Sincroniza el CSS de Noctalia generado por el template:
#   1. dist/noctalia.css  -> servidor local (hot-reload vía /api/reload)
#   2. public/noctalia.css -> commit + push -> GitHub Pages se redeploya
# Solo commitea si el contenido cambió; nunca commitea otra cosa del repo.
set -uo pipefail

REPO="$HOME/startpage/jump-key-noctalia"
SRC="$HOME/.cache/noctalia/jump-key.css"
LOG="$HOME/.cache/noctalia/jumpkey-push.log"

log() { echo "[$(date '+%F %T')] $*" >> "$LOG"; }

if [ ! -f "$SRC" ]; then
  log "aviso: no existe $SRC (¿daemon de Noctalia corriendo?)"
  exit 0
fi

# 1. Copias locales (dist para el servidor, public para el build de Vite)
mkdir -p "$REPO/dist" "$REPO/public"
cp "$SRC" "$REPO/dist/noctalia.css"
cp "$SRC" "$REPO/public/noctalia.css"

# Aviso al navegador abierto (si el servidor local está vivo)
curl -s --max-time 2 http://127.0.0.1:8081/api/reload >/dev/null 2>&1 || true

# 2. Commit + push solo si el archivo cambió
cd "$REPO" || exit 0
git add -- public/noctalia.css
if git diff --cached --quiet -- public/noctalia.css; then
  exit 0 # sin cambios: nada que subir
fi

BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "?")
if git commit -q -m "chore(noctalia): actualizar paleta generada [auto]" -- public/noctalia.css; then
  log "commit creado en rama $BRANCH"
  if [ "$BRANCH" = "main" ]; then
    if GIT_TERMINAL_PROMPT=0 timeout 60 git push -q origin main 2>>"$LOG"; then
      log "push ok"
    else
      log "push fallo (sin red?); el commit queda local"
    fi
  else
    log "rama $BRANCH != main; no se pushea (haz push manual)"
  fi
fi
