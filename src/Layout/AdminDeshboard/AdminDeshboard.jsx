import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Sheared/Navbar/Navbar';

const AdminDeshboard = () => {
    const menuItems = <>
        <li className='font-semibold capitalize'><Link to='/deshboard/productlist'>Products List</Link></li>
        <li className='font-semibold capitalize'><Link to='/deshboard/orderslist'>Orders List</Link></li>
        <li className='font-semibold capitalize'><Link to='/deshboard/addproduct'>Add Product</Link></li>
    </>
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-56 bg-base-100 text-base-content">
                        {menuItems}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminDeshboard;