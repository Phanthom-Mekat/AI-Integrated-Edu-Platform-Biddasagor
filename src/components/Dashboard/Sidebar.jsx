import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { CgGames } from "react-icons/cg";
import { MdLeaderboard } from "react-icons/md";
const Sidebar = () => {
    // State to toggle dropdown visibility
    const [isLearnDropdownOpen, setLearnDropdownOpen] = useState(false);

    // Toggle dropdown state
    const toggleLearnDropdown = () => {
        setLearnDropdownOpen(!isLearnDropdownOpen);
    };

    return (
        <div className="">
            <div className="drawer  lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center relative -top-12 -left-32">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden ">
                        <CiMenuBurger className="text-2xl font-bold"></CiMenuBurger>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-secondary/40 text-base-content min-h-full w-80 p-4 ">
                        {/* Sidebar content here */}
                        <Link to='/dashboard'>
                            <h1 className="text-4xl font-bold mb-10 text-center">Dashboard</h1>
                        </Link>

                            <li> <Link to='/dashboard'>
                            <div className="flex items-center text-xl font-semibold gap-2 my-5">
                                <MdLeaderboard className="text-2xl text-blue-600"></MdLeaderboard>
                                <span>Leaderboard</span>
                            </div></Link>
                                </li>

                        <li  onClick={toggleLearnDropdown} >
                           

                            <div className="flex items-center gap-2 mb-5">
                                {/* Learn with Dropdown */}
                                {isLearnDropdownOpen? '':  <img src="/learnLogo.png" alt="" className="w-[30px] h-[30px] "/>}
                           
                           <div className="flex flex-col">
                           <button 
                               
                                className="text-xl font-semibold flex justify-between items-center w-full"
                            >
                                Learn
                               
                            </button>
                            {isLearnDropdownOpen && (
                                <ul className="pl-4 mt-2">
                                    <li><NavLink to="/dashboard/learn/Math">Math</NavLink></li>
                                    <li><NavLink to="/dashboard/learn/Science">Science </NavLink></li>
                                    <li><NavLink to="/dashboard/learn/Technology">Technology</NavLink></li>
                                </ul>
                            )}
                           </div>
                            </div>
                        </li>
                        <li>
                            <Link to='/dashboard/games'>
                               <div className="flex items-center gap-2 ">
                               <CgGames className="text-3xl text-red-500"></CgGames>
                               <span className="text-xl font-semibold">Games</span>
                               </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
