import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkzV84QcySLxWqCGM-x_GO13HplYbpthM",
  authDomain: "house-news-342af.firebaseapp.com",
  projectId: "house-news-342af",
  storageBucket: "house-news-342af.appspot.com",
  messagingSenderId: "23317852494",
  appId: "1:23317852494:web:72f739f35274fb6d586e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };