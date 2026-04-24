import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Components/Home/Home";
import LogIn from "../../Components/LogIn/LogIn";
import Register from "../../Components/Register/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayout,
        children : [
            {
                index:true,
                Component:Home
            },
            {
                path:"Login",
                Component:LogIn
            },
            {
                path:"Register",
                Component:Register
            },
        ]
    }
])