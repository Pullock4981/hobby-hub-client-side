

import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import './NavBar.css';
import logo from '../../assets/Hobby Hub.png';
import { AuthContext } from '../../Contexts/AuthContext';

const NavBar = () => {
    const navLinks = (
        <div className="flex md:flex-row flex-col px-2 gap-4">
            <NavLink to="/"><li className="font-bold"><a>Home</a></li></NavLink>
            <NavLink to="/allGroup"><li className="font-bold"><a>All Group</a></li></NavLink>
            <NavLink to="/createGroup"><li className="font-bold"><a>Create Group</a></li></NavLink>
            <NavLink to="/myGroup"><li className="font-bold"><a>My Group</a></li></NavLink>
            <NavLink to="/deshBoard"><li className="font-bold"><a>Dashboard</a></li></NavLink>
        </div>
    );

    const [theme, setTheme] = useState("light");

    // theme

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const { user, SignOutUser } = use(AuthContext);

    const handleSignOut = () => {
        SignOutUser()
            .then(() => console.log('User signed out successfully!'))
            .catch((error) => console.error('Error signing out:', error));
    };

    return (
        <nav className="sticky top-0 z-50 shadow bg-[#f2f5f7]">
            <div className="navbar bg-[#f2f5f7] shadow-sm md:px-10 px-4 text-[#040506]">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#040506]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#f2f5f7] rounded-box z-10 mt-3 w-52 p-2 shadow text-[#040506]">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="HobbyHub Logo" className="h-10" />
                        <span className="font-bold text-xl md:block hidden text-[#040506]">HobbyHub</span>
                    </div>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center gap-3 mr-2">
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img
                                    src={user.photoURL}
                                    alt="User Profile"
                                    className="w-10 h-10 rounded-full border-2 border-[#6c8da7] cursor-pointer"
                                />
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="btn bg-[#6c8da7] text-white font-bold transition"
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn bg-[#6c8da7] text-white font-bold transition">
                                Log in
                            </button>
                        </Link>
                    )}
                </div>
                {/* 🌙 Theme toggle */}

                <label className="swap swap-rotate ml-3 md:p-2 p-1 rounded-full bg-primary text-white hover:bg-primary-focus cursor-pointer transition duration-200">
                    <input
                        type="checkbox"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                    />
                    {/* Sun icon (Light mode) */}
                    <svg
                        className="swap-off w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64 17.66L4.22 19.07a1 1 0 001.42 1.42l1.41-1.41a1 1 0 10-1.41-1.42zM1 13h2a1 1 0 100-2H1a1 1 0 000 2zm10-9a1 1 0 00-1 1v2a1 1 0 102 0V5a1 1 0 00-1-1zm9 9h2a1 1 0 100-2h-2a1 1 0 100 2zm-2.05-7.36a1 1 0 00-1.42-1.42L17.66 5.64a1 1 0 001.42 1.42l-1.41-1.42zM12 7a5 5 0 100 10 5 5 0 000-10zm0 16a1 1 0 001-1v-2a1 1 0 10-2 0v2a1 1 0 001 1zm5.66-3.66l1.41 1.41a1 1 0 001.42-1.42l-1.41-1.41a1 1 0 00-1.42 1.42z" />
                    </svg>
                    {/* Moon icon (Dark mode) */}
                    <svg
                        className="swap-on w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2 1 1 0 00-1.33-1.13A10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
                    </svg>
                </label>
            </div>
        </nav>
    );
};

export default NavBar;
