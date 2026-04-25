import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Components/Home/Home";
import LogIn from "../../Components/LogIn/LogIn";
import Register from "../../Components/Register/Register";
import LogOut from "../../Components/LogOut/LogOut";
import Profile from "../../Components/Profile/Profile";
import Order from "../../Components/Order/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoard from "../../Components/DashBoard/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1>404</h1>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "Login",
        Component: LogIn,
      },
      {
        path: "Register",
        Component: Register,
      },
      {
        path: "/LogOut",
        Component: LogOut,
      },
      {
        path: "Profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "Order",
        element: <PrivateRoute><Order></Order></PrivateRoute>,
      },
      {
        path: "/DashBoard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      },
    ],
  },
]);
