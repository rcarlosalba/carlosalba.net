import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage';

export default function useProyectos() {
  const db = useFirestore();
  const storage = useFirebaseStorage();
  const proyectosCollection = useCollection(collection(db, 'proyectos'));

  async function deleteProject(id, urlImage) {
    if (confirm('¿Deseas Eliminar? ')) {
      const docRef = doc(db, 'proyectos', id);
      const imgRef = storageRef(storage, urlImage);
      await Promise.all([deleteDoc(docRef), deleteObject(imgRef)]);
    }
  }

  return {
    proyectosCollection,
    deleteProject,
  };
}
