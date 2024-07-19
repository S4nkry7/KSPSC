import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function get({ request }: { request: Request }) {
  const filePath = path.join(__dirname, '../../../listarArchivos.json');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al leer el archivo JSON' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
