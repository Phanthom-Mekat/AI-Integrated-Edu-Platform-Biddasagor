import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="md:flex h-[90vh]">
                {/* Left Section - Register Form */}
                <div className="md:w-1/2 bg-primary flex flex-col justify-center items-center">
                    <div className="w-3/4 max-w-md bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Register</h1>
                        <p className="text-center text-gray-500 mb-6">
                            Create account and start your journey
                        </p>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>

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
                                className="w-full bg-primary hover:bg-primary-dark text-white btn px-4 py-3 rounded-lg text-lg font-medium transition duration-200 block text-center"
                            >
                                Register
                            </Link>
                        </form>
                        <div className="flex justify-between items-center text-sm mt-4 text-gray-500">
                            <a href="#" className="hover:text-primary">Already have an account?</a>
                            <Link to="/login" className="hover:text-primary font-semibold">Log In</Link>
                        </div>
                    </div>
                </div>

                {/* Right Section - Illustration */}
                <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
                    <img
                        src="../../../public/login.png"
                        alt="Educational illustration"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
