import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import NavBarDashboard from "../components/Dashboard/NavBarDashboard";

const DashboardLayout = () => {
    return (
        <div>
            <div className="">
            <NavBarDashboard></NavBarDashboard>
            </div>

        <div className="md:flex md:min-h-screen">
            <div className="w-80 md:h-screen md:sticky md:top-0 ">
                <Sidebar />
            </div>

            
            <div className="flex-grow ">
                <Outlet />
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;
