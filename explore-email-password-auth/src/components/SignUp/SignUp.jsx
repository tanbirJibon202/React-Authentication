import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";
import { sendEmailVerification } from "firebase/auth";
import { updateProfile } from "firebase/auth";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    setErrorMessage("");
    setSuccess(false);

    if (!terms) {
      setErrorMessage("You must accept the terms and conditions.");
      return;
    }
    // password validation
    const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (passwordRegExp.test(password) == false) {
      setErrorMessage(
        "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 6 characters long.",
      );
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);

        // email verification
        sendEmailVerification(result.user).then(() => {
          setSuccess(true);
          alert("Verification email sent. Please check your inbox.");
        });

        // update user profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("Profile updated successfully.");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="card bg-base-100 mt-12 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Sign Up Now!</h1>
        <form onSubmit={handleSignUp}>
          <label className="label mt-2">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />
          <label className="label mt-2">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label
            className="label mt-2
          "
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label mt-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="btn btn-xs absolute top-2 right-6"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <label className="label mt-2">
            <input type="checkbox" name="terms" className="checkbox" />
            Accept Terms and Conditions
          </label>

          <br />

          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
        <p>
          Already have an account ? Please{" "}
          <Link className="text-blue-400 underline" to="/login">
            Login
          </Link>
        </p>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {success && (
          <p className="text-green-500 mt-4">User created successfully!</p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
