import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="md:flex h-[90vh]">
      {/* Left Section - Login Form */}
      <div className="md:w-1/2 bg-primary flex flex-col justify-center items-center">
        <div className="w-3/4 max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Log In</h1>
          <p className="text-center text-gray-500 mb-6">
            Log In and start your journey with Biddasagor
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
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
                id="password"
                placeholder="Enter your password"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <Link
              to="/dashboard"
              className="w-full bg-primary hover:bg-primary-dark text-white btn px-4 rounded-lg text-lg font-medium transition duration-200"
            >
              Log In
            </Link>
          </form>
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
