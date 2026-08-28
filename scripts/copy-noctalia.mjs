// Copia el CSS generado por Noctalia a dist/. No falla si Noctalia
// no está presente (p.ej. en el runner de GitHub Actions): el tema
// Noctalia simplemente usa los colores base de style.css.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const src = join(homedir(), '.cache/noctalia/jump-key.css');
const outDir = 'dist';
const dest = join(outDir, 'noctalia.css');

try {
  mkdirSync(outDir, { recursive: true });
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log('noctalia.css copiado a dist/');
  } else {
    console.log('Sin CSS de Noctalia (¿daemon no corriendo?); se omite.');
  }
} catch (err) {
  console.warn('Aviso: no se pudo copiar noctalia.css:', err.message);
}
