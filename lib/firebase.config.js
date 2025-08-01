// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB9YhEzKXlG2cYevDQ8Mefpryrb8Ii794",
  authDomain: "penfolks-60305.firebaseapp.com",
  projectId: "penfolks-60305",
  storageBucket: "penfolks-60305.firebasestorage.app",
  messagingSenderId: "282880177093",
  appId: "1:282880177093:web:8e76b96db01cde0d3691ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}