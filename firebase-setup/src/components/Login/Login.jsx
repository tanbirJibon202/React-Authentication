import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin, setUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password);
  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => setUser(result.user));
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

            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

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
