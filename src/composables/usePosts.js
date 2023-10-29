import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage';
export default function usePosts() {
  const db = useFirestore();
  const storage = useFirebaseStorage();
  const postsCollection = useCollection(collection(db, 'posts'));

  async function deletePost(id, urlImage) {
    if (confirm('¿Deseas Eliminar? ')) {
      const docRef = doc(db, 'posts', id);
      const imgRef = storageRef(storage, urlImage);
      await Promise.all([deleteDoc(docRef), deleteObject(imgRef)]);
    }
  }

  return {
    postsCollection,
    deletePost,
  };
}
