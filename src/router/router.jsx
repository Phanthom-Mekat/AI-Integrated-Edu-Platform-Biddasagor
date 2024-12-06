import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../layout/DashboardLayout";
import Leaderboard from "../pages/Leaderboard";
import Games from "../pages/Games";
import Error from "../pages/Error";
import MathPage from "../pages/MathPage";
// import Addition from "../pages/Addition";
import Quiz from "../pages/Quiz";
import Chatbot from "../pages/Chatbot";
import Subtraction from "../pages/Subtraction";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import PlayQuiz from "../components/Dashboard/game/Puzzle";
import LearnAdditions from "../components/Dashboard/Math/LearnAdditions";
// import Test from "../components/Dashboard/Addition/DragApples";
import DragMango from "../components/Subtraction/DragMango";
import Addition from "../pages/Addition";
import GameIframe from "../pages/GameIframe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element:<Login/>,
            },
            {
                path: "register",
                element: <Register />,
            }
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <Leaderboard />,
            },
            {
                path: '/dashboard/games',
                element: <Games></Games>,
            
            },
            {
                path: '/dashboard/playquiz',
                element: <PlayQuiz></PlayQuiz>,
            },
            {
                path: '/dashboard/learn/Math',
                element: <MathPage></MathPage> ,
                
            },
            {
                path: '/dashboard/learn/Math/addition',
                element: <LearnAdditions></LearnAdditions>
            },
            {
                path: '/dashboard/learn/Math/subtraction',
                element: <Subtraction></Subtraction>
            },
            {
                path: '/dashboard/learn/Math/quiz',
                element: <Quiz></Quiz>
            },
            {
                path: '/dashboard/learn/Math/chatbot',
                element: <Chatbot></Chatbot>
            },
            {
                path: '/dashboard/test',
                element: <Addition></Addition>
            },
            {
                path: '/dashboard/game',
                element: <GameIframe></GameIframe>
            },
        ],
    },
    {
        path: "*",
        element: <Error/>,
       
    },
]);

export default router;
