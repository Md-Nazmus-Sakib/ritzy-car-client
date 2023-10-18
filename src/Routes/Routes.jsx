import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/logLayout',
                element: <LoginLayout></LoginLayout>,
                children: [
                    {
                        path: '/logLayout/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/logLayout/register',
                        element: <Register></Register>
                    },
                ]

            },

        ]
    }
])