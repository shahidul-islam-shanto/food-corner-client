// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiaz_EgbCekO5wWnBZbhfq_E7qOXg1p80",
  authDomain: "food-corner-3ced3.firebaseapp.com",
  projectId: "food-corner-3ced3",
  storageBucket: "food-corner-3ced3.firebasestorage.app",
  messagingSenderId: "753300644819",
  appId: "1:753300644819:web:144fc48e56dd2060344526",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
