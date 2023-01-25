import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../Assets/logo/logo.png';
import { ContextBDFood } from '../../ContextProvider/ContextProvider';

const Navbar = () => {
    const { user, userLogout } = useContext(ContextBDFood);
    const navigate = useNavigate();

    const handelLogout = () => {
        userLogout()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.error(error));
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Foods</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/deshboard'>Deshboard</Link></li>
                    <li><button onClick={() => handelLogout()}>Logout</button></li>
                </>
                :
                <>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
        <li><Link>{user?.email}</Link></li>
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
                <Link to='/' className="btn pl-0 btn-ghost normal-case text-xl flex items-center">
                    BD Food
                    <img className='h-full ml-2' src={logo} alt="" />
                </Link>
            </div>
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">Deashboard</label>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;