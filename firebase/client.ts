// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// so this file is for the user interaction with the app firebase
// here we can help users check the database and also authentifie

const firebaseConfig = {
  apiKey: "AIzaSyBFOZt8hpkOEVa9GDzktKvY6-D1xeL_zk4",
  authDomain: "ready4hr.firebaseapp.com",
  projectId: "ready4hr",
  storageBucket: "ready4hr.firebasestorage.app",
  messagingSenderId: "218174881205",
  appId: "1:218174881205:web:31c13fe7bbc8199411adfc",
  measurementId: "G-3VX3QXZ8XL",
};

// Initialize Firebase :
// we should make sure that we have one and only instance of the app firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
