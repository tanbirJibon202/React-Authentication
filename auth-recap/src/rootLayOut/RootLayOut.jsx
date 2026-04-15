import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../componets/Navbar/Navbar";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const valueContext = createContext();
const RootLayOut = () => {
  const [user, setUser] = useState();
  console.log(user);
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const contextValues = {
    handleLogin,
    handleSignUp,
    setUser,
    user,
  };

  return (
    <div>
      <Navbar></Navbar>
      <valueContext.Provider value={contextValues}>
        <Outlet></Outlet>
      </valueContext.Provider>
    </div>
  );
};

export default RootLayOut;
