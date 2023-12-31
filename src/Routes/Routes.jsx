import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/Products/ProductDetails";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorPage from "../Common/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>

            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>


            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ritzy-car-server-exsea3g2u-md-nazmus-sakib.vercel.app/products/${params.id}`)

            },
            {
                path: '/brands/:brandName',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://ritzy-car-server-exsea3g2u-md-nazmus-sakib.vercel.app/brands/${params.brandName}`)
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ritzy-car-server-exsea3g2u-md-nazmus-sakib.vercel.app/products/${params.id}`)
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