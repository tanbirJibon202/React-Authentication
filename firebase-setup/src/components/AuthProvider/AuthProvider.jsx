import React, { createContext } from "react";
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) =>
      console.log(result.user),
    );
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((result) =>
      console.log(result.user),
    );
  };

  const authInfo = {
    registerUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
