

// import React, { use, useState } from 'react';
// import { Link, NavLink } from 'react-router';
// import './NavBar.css';
// import logo from '../../assets/Hobby Hub.png';
// import { AuthContext } from '../../Contexts/AuthContext';

// const NavBar = () => {
//     const navLinks = (
//         <div className="flex md:flex-row flex-col px-2 gap-4">
//             <NavLink to="/"><li className="font-bold"><a>Home</a></li></NavLink>
//             <NavLink to="/allGroup"><li className="font-bold"><a>All Group</a></li></NavLink>
//             <NavLink to="/createGroup"><li className="font-bold"><a>Create Group</a></li></NavLink>
//             <NavLink to="/myGroup"><li className="font-bold"><a>My Group</a></li></NavLink>
//             <NavLink to="/deshBoard"><li className="font-bold"><a>Dashboard</a></li></NavLink>
//         </div>
//     );

//     const [theme, setTheme] = useState("light");

//     // theme

//     const toggleTheme = () => {
//         const newTheme = theme === "light" ? "dark" : "light";
//         setTheme(newTheme);
//         document.documentElement.setAttribute("data-theme", newTheme);
//         localStorage.setItem("theme", newTheme);
//     };

//     const { user, SignOutUser } = use(AuthContext);

//     const handleSignOut = () => {
//         SignOutUser()
//             .then(() => console.log('User signed out successfully!'))
//             .catch((error) => console.error('Error signing out:', error));
//     };

//     return (
//         <nav className="sticky top-0 z-50 shadow bg-[#f2f5f7]">
//             <div className="navbar bg-[#f2f5f7] shadow-sm md:px-10 px-4 text-[#040506]">
//                 {/* Navbar Start */}
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#040506]">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
//                                 viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-[#f2f5f7] rounded-box z-10 mt-3 w-52 p-2 shadow text-[#040506]">
//                             {navLinks}
//                         </ul>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <img src={logo} alt="HobbyHub Logo" className="h-10" />
//                         <span className="font-bold text-xl md:block hidden text-[#040506]">HobbyHub</span>
//                     </div>
//                 </div>

//                 {/* Navbar Center */}
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navLinks}
//                     </ul>
//                 </div>

//                 {/* Navbar End */}
//                 <div className="navbar-end">
//                     {user ? (
//                         <div className="flex items-center gap-3 mr-2">
//                             <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
//                                 <img
//                                     src={user.photoURL}
//                                     alt="User Profile"
//                                     className="w-10 h-10 rounded-full border-2 border-[#6c8da7] cursor-pointer"
//                                 />
//                             </div>
//                             <button
//                                 onClick={handleSignOut}
//                                 className="btn bg-[#6c8da7] text-white font-bold transition"
//                             >
//                                 Log out
//                             </button>
//                         </div>
//                     ) : (
//                         <Link to="/login">
//                             <button className="btn bg-[#6c8da7] text-white font-bold transition">
//                                 Log in
//                             </button>
//                         </Link>
//                     )}
//                 </div>
//                 {/* 🌙 Theme toggle */}

//                 <label className="swap swap-rotate ml-3 md:p-2 p-1 rounded-full bg-primary text-white hover:bg-primary-focus cursor-pointer transition duration-200">
//                     <input
//                         type="checkbox"
//                         onChange={toggleTheme}
//                         checked={theme === "dark"}
//                     />
//                     {/* Sun icon (Light mode) */}
//                     <svg
//                         className="swap-off w-6 h-6 fill-current"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                     >
//                         <path d="M5.64 17.66L4.22 19.07a1 1 0 001.42 1.42l1.41-1.41a1 1 0 10-1.41-1.42zM1 13h2a1 1 0 100-2H1a1 1 0 000 2zm10-9a1 1 0 00-1 1v2a1 1 0 102 0V5a1 1 0 00-1-1zm9 9h2a1 1 0 100-2h-2a1 1 0 100 2zm-2.05-7.36a1 1 0 00-1.42-1.42L17.66 5.64a1 1 0 001.42 1.42l-1.41-1.42zM12 7a5 5 0 100 10 5 5 0 000-10zm0 16a1 1 0 001-1v-2a1 1 0 10-2 0v2a1 1 0 001 1zm5.66-3.66l1.41 1.41a1 1 0 001.42-1.42l-1.41-1.41a1 1 0 00-1.42 1.42z" />
//                     </svg>
//                     {/* Moon icon (Dark mode) */}
//                     <svg
//                         className="swap-on w-6 h-6 fill-current"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                     >
//                         <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2 1 1 0 00-1.33-1.13A10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
//                     </svg>
//                 </label>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;

// import React, { useEffect, useState, useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Hobby Hub.png';
// import { AuthContext } from '../../Contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import './NavBar.css'; // Assuming your theme CSS is here or globally imported
import { AuthContext } from '../../Contexts/AuthContext';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    const [theme, setTheme] = useState('light');

    // Load theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    // Toggle light/dark theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const { user, SignOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        SignOutUser()
            .then(() => console.log('User signed out successfully!'))
            .catch((error) => console.error('Error signing out:', error));
    };

    const navLinks = (
        <ul className="flex md:flex-row flex-col px-2 gap-4">
            <li><NavLink to="/" className="font-bold">Home</NavLink></li>
            <li><NavLink to="/allGroup" className="font-bold">All Group</NavLink></li>
            <li><NavLink to="/createGroup" className="font-bold">Create Group</NavLink></li>
            <li><NavLink to="/myGroup" className="font-bold">My Group</NavLink></li>
            <li><NavLink to="/deshBoard" className="font-bold">Dashboard</NavLink></li>
        </ul>
    );

    return (
        <nav className="sticky top-0 z-50 shadow bg-base-100 text-base-content">
            <div className="navbar shadow-sm md:px-10 px-4">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="HobbyHub Logo" className="h-10" />
                        <span className="font-bold text-xl md:block hidden">HobbyHub</span>
                    </div>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-2">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 cursor-pointer"
                                />
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="btn bg-[#6C8EA7] text-white font-bold">
                                Log out
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn bg-[#6C8EA7] text-white font-bold">Log in</button>
                        </Link>
                    )}

                    {/* Theme Toggle */}
                
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox"
                            onChange={toggleTheme}
                            checked={theme === 'dark'}
                            className="theme-controller"
                            value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
