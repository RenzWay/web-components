// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX3FZcfV3AkVy6k5Ba1R26w62qAjBlkEU",
  authDomain: "web-component-53af8.firebaseapp.com",
  projectId: "web-component-53af8",
  storageBucket: "web-component-53af8.firebasestorage.app",
  messagingSenderId: "761468369360",
  appId: "1:761468369360:web:87b845362dc9c8f27f21d5",
  measurementId: "G-25MSRER37B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
