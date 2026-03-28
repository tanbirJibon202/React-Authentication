// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI50e9x6FfAXel4KoIP9w0wHpCMg2Gkfg",
  authDomain: "explore-email-password-a-7a792.firebaseapp.com",
  projectId: "explore-email-password-a-7a792",
  storageBucket: "explore-email-password-a-7a792.firebasestorage.app",
  messagingSenderId: "684919932568",
  appId: "1:684919932568:web:25559adfb987cd89dd72ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);