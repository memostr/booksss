// services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADFybOU1WW3DMUB04E-dEa3gm71X2C3rM",
  authDomain: "books-c14ef.firebaseapp.com",
  projectId: "books-c14ef",
  storageBucket: "books-c14ef.appspot.com",
  messagingSenderId: "1058844041741",
  appId: "1:1058844041741:web:fa50bee13876cf2564ab44",
  measurementId: "G-H4J6KS0CH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
