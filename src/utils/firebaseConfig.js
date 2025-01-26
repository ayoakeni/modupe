import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBunVgeXF3xLLst1Dhi7sAx9yBCtnqK284",
  authDomain: "login-authentication-e4113.firebaseapp.com",
  databaseURL: "https://login-authentication-e4113-default-rtdb.firebaseio.com",
  projectId: "login-authentication-e4113",
  storageBucket: "login-authentication-e4113.appspot.com",
  messagingSenderId: "914208076072",
  appId: "1:914208076072:web:55bb0043e1b05c245da01d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
