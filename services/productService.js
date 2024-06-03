import { db, storage } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const setCreateProductService = async (product, image) => {
  try {
    // Resmi Firebase Storage'a yükleyin
    const storageRef = ref(storage, `products/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Ürün verilerini Firestore'a kaydedin
    const docRef = await addDoc(collection(db, "Products"), {
      ...product,
      images: downloadURL,
    });

    return { status: 200, data: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { status: 500, error: error.message };
  }
};
