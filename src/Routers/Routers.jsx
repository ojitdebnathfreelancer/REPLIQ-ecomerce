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
                path: '/details',
                element: <Details></Details>
            }
        ],
    },
    {
        path: '/deshboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivetRoute><AdminDeshboard></AdminDeshboard></PrivetRoute>,
        children: [
            {
                path: '/deshboard/productlist',
                element: <AdminProductList></AdminProductList>
            },
            {
                path: 'deshboard/productdetails',
                element: <AdminProductDetails></AdminProductDetails>
            },
            {
                path: '/deshboard/orderslist',
                element: <AdminOrdersList></AdminOrdersList>
            },
            {
                path: '/deshboard/orderdetaisl',
                element: <AdminOrderDetaisl></AdminOrderDetaisl>
            },
            {
                path: '/deshboard/addproduct',
                element: <AdminAddProduct></AdminAddProduct>
            }
        ],
    },
]);