// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnDM_PqGMc8stQb9Sl-K3aPYBLVxTQXNU",
  authDomain: "mern-book-inventory-44e1a.firebaseapp.com",
  projectId: "mern-book-inventory-44e1a",
  storageBucket: "mern-book-inventory-44e1a.appspot.com",
  messagingSenderId: "54331573525",
  appId: "1:54331573525:web:dc8d022abce17dffae951c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;