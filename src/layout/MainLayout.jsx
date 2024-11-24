import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* navbar here */}
            <Navbar/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;