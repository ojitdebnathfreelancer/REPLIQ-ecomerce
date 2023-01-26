import { createBrowserRouter } from "react-router-dom";
import AdminDeshboard from "../Layout/AdminDeshboard/AdminDeshboard";
import Main from "../Layout/Main/Main";
import AdminAddProduct from "../Pages/AdminAddProduct/AdminAddProduct";
import AdminOrderDetaisl from "../Pages/AdminOrderDetails/AdminOrderDetaisl";
import AdminOrdersList from "../Pages/AdminOrdersList/AdminOrdersList";
import AdminProductDetails from "../Pages/AdminProductDetails/AdminProductDetails";
import AdminProductList from "../Pages/AdminProductList/AdminProductList";
import Cart from "../Pages/Cart/Cart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Products/Detaisl/Details";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://bd-ecomere-server.vercel.app/food/${params.id}`, {
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }),
                element: <PrivetRoute><Details></Details></PrivetRoute>
            }
        ],
    },
    {
        path: '/deshboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivetRoute><AdminRoute><AdminDeshboard></AdminDeshboard></AdminRoute></PrivetRoute>,
        children: [
            {
                path: '/deshboard/productlist',
                element: <AdminRoute><AdminProductList></AdminProductList></AdminRoute>
            },
            {
                path: '/deshboard/productdetails/:id',
                loader: ({ params }) => fetch(`https://bd-ecomere-server.vercel.app/food/${params.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }),
                element: <AdminRoute><AdminProductDetails></AdminProductDetails></AdminRoute>
            },
            {
                path: '/deshboard/orderslist',
                element: <AdminRoute><AdminOrdersList></AdminOrdersList></AdminRoute>
            },
            {
                path: '/deshboard/orderdetaisl/:id',
                loader: ({ params }) => fetch(`https://bd-ecomere-server.vercel.app/cart/${params.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }),
                element: <AdminRoute><AdminOrderDetaisl></AdminOrderDetaisl></AdminRoute>
            },
            {
                path: '/deshboard/addproduct',
                element: <AdminRoute><AdminAddProduct></AdminAddProduct></AdminRoute>
            }
        ],
    },
]);