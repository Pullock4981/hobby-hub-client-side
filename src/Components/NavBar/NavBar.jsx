import React from 'react';
import { NavLink } from 'react-router';
import './NavBar.css';
import logo from '../../assets/Hobby Hub.png'

const NavBar = () => {
    // nav Links here
    const navLinks = <>

        <div className='flex md:flex-row flex-col px-2 gap-4'>
            <NavLink to='/'><li className='font-bold '><a>Home</a></li></NavLink>
            <NavLink to='/allGroup'><li className='font-bold '><a>All Group</a></li></NavLink>
            <NavLink to='/createGroup'><li className='font-bold '><a>Create Group</a></li></NavLink>
            <NavLink to='/myGroup'><li className='font-bold '><a>My Group</a></li></NavLink>
        </div>

    </>
    return (
        <div className='sticky top-0'>
            <div className="navbar bg-base-100 shadow-sm  md:px-16 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="HobbyHub Logo" className="h-10" />
                        <a className="font-bold text-xl md:block hidden">HobbyHub</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#fdc323] font-bold">Login</button>
                    <button className="btn bg-[#fdc323] font-bold">Register</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;