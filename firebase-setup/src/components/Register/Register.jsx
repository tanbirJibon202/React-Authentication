import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, photo, email, password, confirmPassword);
    registerUser(email, password);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-4">Register</h2>

            <form onSubmit={handleRegister} className="fieldset p-0">
              {/* Name Field */}
              <label className="label pb-2">Name</label>{" "}
              {/* pb-2 diye gap barano hoyeche */}
              <input
                name="name"
                type="text"
                className="input input-bordered"
                placeholder="Your Name"
                // required
              />
              {/* Photo URL Field */}
              <label className="label pb-2 mt-2">Photo URL</label>{" "}
              {/* mt-2 diye upore gap deya hoyeche */}
              <input
                name="photo"
                type="text"
                className="input input-bordered"
                placeholder="Photo URL"
                // required
              />
              {/* Email Field */}
              <label className="label pb-2 mt-2">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered"
                placeholder="Email"
                // required
              />
              {/* Password Field */}
              <label className="label pb-2 mt-2">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered"
                placeholder="Password"
                // required
              />
              {/* Confirm Password Field */}
              <label className="label pb-2 mt-2">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                className="input input-bordered"
                placeholder="Confirm Password"
                // required
              />
              <button type="submit" className="btn btn-neutral mt-6 w-full">
                Register
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link
                type="submit"
                to="/login"
                className="link link-hover text-primary font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
