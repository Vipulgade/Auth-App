// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2_LP5ZxmaV-_VtFnPl2vQ2YUV6eVtgaE",
  authDomain: "auth-app-acc53.firebaseapp.com",
  projectId: "auth-app-acc53",
  storageBucket: "auth-app-acc53.firebasestorage.app",
  messagingSenderId: "656782205620",
  appId: "1:656782205620:web:3f258826826bb0e5416de1",
  measurementId: "G-WVREDR8XT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize and export Firebase Auth
export const auth = getAuth(app);