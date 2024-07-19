import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

async function obtenerComunicados() {
  const comunicadosRef = ref(storage, 'Comunicados');
  const result = await listAll(comunicadosRef);
  
  const foldersPromises = result.prefixes.map(async (folderRef) => {
    const folderName = folderRef.name;
    const folderResult = await listAll(folderRef);
    const filesPromises = folderResult.items.map(async (itemRef) => {
      const fileUrl = await getDownloadURL(itemRef);
      return {
        nombre: itemRef.name,
        url: fileUrl
      };
    });
    
    const files = await Promise.all(filesPromises);
    
    return {
      titulo: folderName,
      descripcion: files
    };
  });

  const folders = await Promise.all(foldersPromises);
  
  return folders;
}

export { obtenerComunicados };
