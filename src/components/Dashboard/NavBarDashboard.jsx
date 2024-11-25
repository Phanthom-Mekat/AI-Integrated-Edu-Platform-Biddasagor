import { IoIosNotifications } from "react-icons/io";
const NavBarDashboard = () => {
    return (
        <div className="w-full bg-secondary/40">
            <div className="flex justify-end mr-10 items-center gap-4">

            <h1 className="text-3xl"><IoIosNotifications></IoIosNotifications></h1>

            <div>
                <img src="/dp-removebg-preview.png" alt="" className="rounded-full w-[50px] h-[50px]"/>
            </div>

            <div>
                    <h1 className="font-bold ">Kid A</h1>

                    
            </div>

            </div>
        </div>
    );
};

export default NavBarDashboard;