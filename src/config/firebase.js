import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAjuSolHVH6QaA4dseoFF58V3-mR7pQSUQ",
  authDomain: "tiktok-clone-f58bd.firebaseapp.com",
  projectId: "tiktok-clone-f58bd",
  storageBucket: "tiktok-clone-f58bd.appspot.com",
  messagingSenderId: "1010300120921",
  appId: "1:1010300120921:web:bd72e5f8eee8340f6a2648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db