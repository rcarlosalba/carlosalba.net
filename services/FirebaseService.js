import { useFirestore, useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';

export function useFirebaseService() {
  const db = useFirestore();
  const postsCollection = useCollection(collection(db, 'posts'));
  const proyectosCollection = useCollection(collection(db, 'proyectos'));

  return {
    proyectosCollection,
    postsCollection,
  };
}
