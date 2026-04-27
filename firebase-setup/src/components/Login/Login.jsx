import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

            <form onSubmit={handleLogin} className="fieldset p-0">
              {/* Email Field */}
              <label className="label pb-1">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />

              {/* Password Field */}
              <label className="label pb-1 mt-1">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />

              {/* Forgot Password Link */}
              <div className="mt-2 text-right">
                <a href="#" className="link link-hover text-xs">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-neutral mt-1 w-full">
                Login
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              New to this site?{" "}
              <Link
                to="/register"
                className="link link-hover text-primary font-semibold"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
