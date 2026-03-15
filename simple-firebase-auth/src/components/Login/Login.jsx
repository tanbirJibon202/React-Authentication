import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, SetUser] = useState(null);
  const handleGoogleSignIn = () => {
    // console.log("Google sign in click");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        SetUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout completed");
        SetUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // console.log(result.user);
        const loggedInUser = result.user;
        console.log(loggedInUser);
        if (!loggedInUser.email && loggedInUser.providerData?.length) {
          // console.log(
          //   "User email is not directly provided",
          //   loggedInUser.providerData,
          // );
          console.log("User email is not directly provided");
          if (loggedInUser.providerData[0].email) {
            loggedInUser.email = loggedInUser.providerData[0].email;
            SetUser(loggedInUser);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please Login</h2>
      {/* <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        // <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        <>
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
          <button onClick={handleGithubSignIn}>Sign In with Github</button>
        </>
      )}
      {user && (
        <div>
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src="{user.photoURL}" />
        </div>
      )}
    </div>
  );
};

export default Login;
