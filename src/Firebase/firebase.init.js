// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDiUyU0FQxx8q8YXv1kl3qgej3BpksuX4",
  authDomain: "donate-wise.firebaseapp.com",
  projectId: "donate-wise",
  storageBucket: "donate-wise.firebasestorage.app",
  messagingSenderId: "306014235358",
  appId: "1:306014235358:web:63c30cbff86b4c55de304f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);