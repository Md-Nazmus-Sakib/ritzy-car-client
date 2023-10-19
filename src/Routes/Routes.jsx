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
                path: '/addProduct',
                element: <AddProduct></AddProduct>

            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)

            },
            {
                path: '/brands/:brandName',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.brandName}`)
            },
            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
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