import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Login = () => {

  const { signIn, setUser, googleSignin } = useContext(AuthContext);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  // const location = useLocation();

  const handleGoogleLogin = () => {
    googleSignin()
      .then((res) => {
        MySwal.fire({
          title: "Login Successful",
          text: "You have logged in successfully.",
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      })
      .catch((err) => {
        MySwal.fire({
          title: "Login Failed",
          text: `Error: ${err.message}`,
          icon: "error",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        setUser(res.user);
        MySwal.fire({
          title: "Login Successful",
          text: "You have logged in successfully.",
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 800);
      })
      .catch((err) => {
        MySwal.fire({
          title: "Login Failed",
          text: `Error: ${err.message}`,
          icon: "error",
        });
      });
  };




  return (
    <div className="md:flex h-[90vh]">
      {/* Left Section - Login Form */}
      <div className="md:w-1/2 bg-primary flex flex-col justify-center items-center">
        <div className="w-3/4 max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Log In</h1>
          <p className="text-center text-gray-500 mb-6">
            Log In and start your journey with Biddasagor
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white btn px-4 rounded-lg text-lg font-medium transition duration-200"
            >
              Log In
            </button>
          </form>

          <div className="py-5 flex items-center justify-center">
          <button
                  onClick={handleGoogleLogin}
                  className="btn flex items-center text-lg"
                >
                  <FaGoogle /> Login with Google
                </button>
          </div>

          <div className="flex justify-between items-center text-sm mt-4 text-gray-500">
            <a href="#" className="hover:text-primary">Forgot password?</a>
            <Link to="register"  className="hover:text-primary font-semibold">Register Now!</Link>
          </div>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
        <img
          src='login.png'
          alt="Educational illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
