import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './NavBar.css';
import logo from '../../assets/Hobby Hub.png'
import { AuthContext } from '../../Contexts/AuthContext';

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

    // user info find from context
    const { user, SignOutUser } = use(AuthContext);
    console.log('nav', user);

    // sign out function
    const handleSignOut = () => {
        SignOutUser()
            .then(() => {
                console.log('User signed out successfully!');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    }


    // return (
    //     <div className=''>
    //         <div className="navbar bg-base-100 shadow-sm  md:px-16 px-4">
    //             <div className="navbar-start">
    //                 <div className="dropdown">
    //                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
    //                     </div>
    //                     <ul
    //                         tabIndex={0}
    //                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    //                         {
    //                             navLinks
    //                         }
    //                     </ul>
    //                 </div>
    //                 <div className="flex items-center gap-2">
    //                     <img src={logo} alt="HobbyHub Logo" className="h-10" />
    //                     <a className="font-bold text-xl md:block hidden">HobbyHub</a>
    //                 </div>
    //             </div>
    //             <div className="navbar-center hidden lg:flex">
    //                 <ul className="menu menu-horizontal px-1">
    //                     {
    //                         navLinks
    //                     }
    //                 </ul>
    //             </div>
    //             <div className="navbar-end">
    //                 <Link to='/login'>
    //                     <button className="btn bg-[#fdc323] font-bold">Login</button>
    //                 </Link>
    //                 <Link to='/register'>
    //                     <button className="btn bg-[#fdc323] font-bold">Register</button>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10 px-4">
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
                {
                    user ? (
                        <div className="flex items-center gap-3 mr-2">
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img
                                    src={user.photoURL}
                                    alt="User Profile"
                                    className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                                />
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="btn bg-amber-400 font-bold"
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        <Link to='/login'>
                            <button className="btn bg-amber-400 font-bold">Log in</button>
                        </Link>
                    )
                }
            </div>


        </div >


    );

};

export default NavBar;