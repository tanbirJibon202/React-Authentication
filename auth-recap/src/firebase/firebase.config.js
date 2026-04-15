import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfNtmK8PFnllHCeVTz4oDd6Tps1qL7Aig",
  authDomain: "my-auth-practice-project-c299a.firebaseapp.com",
  projectId: "my-auth-practice-project-c299a",
  storageBucket: "my-auth-practice-project-c299a.firebasestorage.app",
  messagingSenderId: "993850744148",
  appId: "1:993850744148:web:1980e9d45c06b27a767cc1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
