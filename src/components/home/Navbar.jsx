import { GiBookAura } from "react-icons/gi";
import { IoMdKey } from "react-icons/io";
import {Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const links = <>
        <li className="mr-2 font-bold text-gray-500"><NavLink to="/" className={({isActive}) => isActive ? "bg-secondary/80" : ""}>Home</NavLink></li>
        <li className="mr-2 font-bold text-gray-500"><NavLink to="/about">About Us</NavLink></li>
    </>
    return (
        <div className={`${isHome ? "bg-primary/25" : " bg-base-100"}`}>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Biddasagor<GiBookAura className="text-secondary" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to='/dashboard' className="btn btn-ghost btn-outline text-secondary font-extrabold text-lg rounded-3xl"><IoMdKey className="text-xl" />Login </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;