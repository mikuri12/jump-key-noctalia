#!/usr/bin/env bash
set -euo pipefail
cd ~/startpage/jump-key-noctalia
git add -f dist/noctalia.css
git diff --cached --quiet && exit 0
git commit -m "style: update noctalia colors"
git push origin gh-pages