import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/user.png'
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logout success')
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className=''>
            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <div className="md:hidden dropdown mr-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About Us</Link></li>
                            <li><Link to={'/service'}>Service</Link></li>
                        </ul>
                    </div>

                    <a href='/' className="text-2xl font-semibold">FoodsZone</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About Us</Link></li>
                        <li><Link to={'/service'}>Service</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user ? <img alt="Profile" title={user.displayName} src={user?.photoURL} /> : <img alt="Tailwind CSS Navbar component" src={logo} />
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {user ?
                                <div>
                                    <li><button onClick={handleLogout}>LogOut</button></li>
                                    <li><Link to={'/profile'}>Profile</Link></li>
                                </div>
                                :
                                <div>
                                    <li><Link to={'/login'}>Login</Link></li>
                                    <li><Link to={'/reg'}>Register</Link></li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;