// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6M-RztWu0EOx_sEI4pUMAa7BF0Co0-Zc",
  authDomain: "fir-auth-52acd.firebaseapp.com",
  projectId: "fir-auth-52acd",
  storageBucket: "fir-auth-52acd.firebasestorage.app",
  messagingSenderId: "511437920308",
  appId: "1:511437920308:web:4c1e20c4ec6eb102e79261",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
