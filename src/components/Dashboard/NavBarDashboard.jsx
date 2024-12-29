import { IoIosNotifications } from "react-icons/io";
import GoogleTranslate from "../../GoogleTranslate";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const NavBarDashboard = () => {

    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const logOutExit = () => {
        logOut();
        navigate('/login')
    }

    return (
        <div className="w-full lg:bg-secondary/40">
            <div className="flex justify-end mr-10 items-center gap-4">

            <h1 className="text-3xl"><IoIosNotifications></IoIosNotifications></h1>
            <GoogleTranslate />

            <div>
               {user?.photoURL ?  <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full"/> : '' }
            </div>

            <div>
                    <h1 className="font-bold ">{user?.displayName ||  'Guest'} </h1>

                    
            </div>

            <div>
                <button  onClick={logOutExit}>Logout</button>
            </div>

            </div>
        </div>
    );
};

export default NavBarDashboard;