import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

async function obtenerCVs() {
  const cvsRef = ref(storage, 'CVs');
  const result = await listAll(cvsRef);

  // Filtrar archivos PDF y obtener sus URLs
  const pdfUrlsPromises = result.items
    .filter(itemRef => itemRef.name.endsWith('.pdf')) // Filtrar solo archivos PDF
    .map(async (itemRef) => {
      return await getDownloadURL(itemRef);
    });

  const pdfUrls = await Promise.all(pdfUrlsPromises);
  
  return pdfUrls;
}

export { obtenerCVs };
