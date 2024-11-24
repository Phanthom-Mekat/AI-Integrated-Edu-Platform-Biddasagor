import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    // State to toggle dropdown visibility
    const [isLearnDropdownOpen, setLearnDropdownOpen] = useState(false);

    // Toggle dropdown state
    const toggleLearnDropdown = () => {
        setLearnDropdownOpen(!isLearnDropdownOpen);
    };

    return (
        <div className="">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Sidebar
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <Link to='/dashboard'>
                            <h1 className="text-4xl font-bold mb-10 text-center">Dashboard</h1>
                        </Link>
                        <li>
                            {/* Learn with Dropdown */}
                            <button 
                                onClick={toggleLearnDropdown} 
                                className="text-xl font-semibold flex justify-between items-center w-full"
                            >
                                Learn
                               
                            </button>
                            {isLearnDropdownOpen && (
                                <ul className="pl-4 mt-2">
                                    <li><Link to="/dashboard/learn/Math">Math</Link></li>
                                    <li><Link to="/dashboard/learn/Science">Science </Link></li>
                                    <li><Link to="/dashboard/learn/Technology">Technology</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to='/dashboard/games'>
                                <span className="text-xl font-semibold">Games</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
