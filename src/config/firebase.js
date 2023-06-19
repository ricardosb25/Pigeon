import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAunWvxnVG7AWl8NgkBuxnLZLc4YpxYVKM",
  authDomain: "pigeon-60dab.firebaseapp.com",
  projectId: "pigeon-60dab",
  storageBucket: "pigeon-60dab.appspot.com",
  messagingSenderId: "442973022817",
  appId: "1:442973022817:web:6e3fea89ac162490225820"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;