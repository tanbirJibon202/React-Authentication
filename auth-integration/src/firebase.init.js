// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCelYqPB5fMFrCOJRkpd_Gn82-wedmUFYg",
  authDomain: "auth-integration-5ca42.firebaseapp.com",
  projectId: "auth-integration-5ca42",
  storageBucket: "auth-integration-5ca42.firebasestorage.app",
  messagingSenderId: "575839813795",
  appId: "1:575839813795:web:251490f450de730d867f16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
