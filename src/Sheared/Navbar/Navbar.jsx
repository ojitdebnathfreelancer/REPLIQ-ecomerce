import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../Assets/logo/logo.png';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Foods</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/deshboard'>Deshboard</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 flex items-center justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <GiHamburgerMenu size={25} />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl flex items-center">
                    BD Food
                    <img className='h-full ml-2' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;