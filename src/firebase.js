// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUnc9A0EptTvWriHNavHxpkavNZEyKms",
  authDomain: "reactbase2.firebaseapp.com",
  projectId: "reactbase2",
  storageBucket: "reactbase2.appspot.com",
  messagingSenderId: "879840900591",
  appId: "1:879840900591:web:39af2bce5c2b577407721a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const docs = doc;
export const firestore = getFirestore;
export const collections = collection;
export const addDocs = addDoc;
export const getDoc = getDocs;
export const setDocs = setDoc;

