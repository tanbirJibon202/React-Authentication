// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4b7oFtVltl55WQGbo1GkriooZu_4n3QQ",
  authDomain: "simple-firebase-auth-264b8.firebaseapp.com",
  projectId: "simple-firebase-auth-264b8",
  storageBucket: "simple-firebase-auth-264b8.firebasestorage.app",
  messagingSenderId: "411186434629",
  appId: "1:411186434629:web:f020c45e64060a11a1492c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
