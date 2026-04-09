import React, { useState, createContext, useEffect } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user: user,
    setUser: setUser,
    createUser: createUser,
    logOut: logOut,
    signIn: signIn,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
