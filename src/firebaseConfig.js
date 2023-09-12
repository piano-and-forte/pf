import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxSzk3cOoqGD-kIMaOrK-S3oXsemYQH_4",
  authDomain: "piano-teaching-in-school.firebaseapp.com",
  projectId: "piano-teaching-in-school",
  storageBucket: "piano-teaching-in-school.appspot.com",
  messagingSenderId: "691998726068",
  appId: "1:691998726068:web:5df0936055bb48016bc4e1",
  measurementId: "G-X3F278V5ZG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
