import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MainLayout = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, easing: "ease-in-out" });
      }, []);
    return (
        <div className="">
            {/* navbar here */}
            <Navbar/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;