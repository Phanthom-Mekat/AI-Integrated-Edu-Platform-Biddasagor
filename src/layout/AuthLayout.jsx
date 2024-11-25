import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";

const AuthLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;