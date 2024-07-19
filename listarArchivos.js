import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getAllPdfs(directoryPath) {
  let results = {};

  const listFiles = (dir, baseDir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        listFiles(filePath, path.basename(filePath));
      } else if (file.endsWith('.pdf')) {
        const year = path.basename(baseDir);
        if (!results[year]) {
          results[year] = [];
        }
        // Modificar la URL para que comience desde /src/assets/PDF´S/
        const relativePath = path.relative(__dirname, filePath);
        const url = `/${relativePath.replace(/\\/g, '/')}`; // Asegurarse de que las barras sean correctas en diferentes sistemas operativos
        results[year].push({
          nombre: file,
          url: url
        });
      }
    });
  };

  listFiles(directoryPath, directoryPath);
  return results;
}

const directoryPath = path.join(__dirname, 'src/assets/PDF´S');
const pdfFiles = getAllPdfs(directoryPath);

const items = Object.keys(pdfFiles).map(year => ({
  titulo: year,
  descripcion: pdfFiles[year]
}));

const outputFilePath = path.join(__dirname, 'public', 'listarArchivos.json');

fs.promises.writeFile(outputFilePath, JSON.stringify(items, null, 2))
  .then(() => {
    console.log('Archivo JSON escrito correctamente en public.');
  })
  .catch((error) => {
    console.error('Error al escribir el archivo JSON:', error);
  });
