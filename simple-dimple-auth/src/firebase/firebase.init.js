// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB7HcAEZx6W2cI4Gp6nRx7c6Rl9BkNTk4",
  authDomain: "simple-dimple-auth-66e59.firebaseapp.com",
  projectId: "simple-dimple-auth-66e59",
  storageBucket: "simple-dimple-auth-66e59.firebasestorage.app",
  messagingSenderId: "650613698428",
  appId: "1:650613698428:web:aa563e57db1c529cd53ef9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
