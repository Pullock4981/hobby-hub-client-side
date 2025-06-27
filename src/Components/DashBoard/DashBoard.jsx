
// import { FaHome, FaPlusCircle, FaUser, FaUserFriends } from 'react-icons/fa';
// import Logo from '../../assets/Hobby Hub.png'

// import { NavLink, Outlet } from "react-router";
// import { FaUsersRays } from 'react-icons/fa6';

// const DashBoard = () => {
//     return (
//         <div className="drawer lg:drawer-open">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col">

//                 {/* Navbar */}
//                 <div className="navbar bg-base-300 w-full lg:hidden">
//                     <div className="flex-none ">
//                         <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 className="inline-block h-6 w-6 stroke-current"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16M4 18h16"
//                                 ></path>
//                             </svg>
//                         </label>
//                     </div>
//                     <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>

//                 </div>
//                 {/* Page content here */}
//                 <Outlet></Outlet>
//                 {/* Page content here */}

//             </div>
//             <div className="drawer-side">
//                 <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
//                 <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//                     {/* Sidebar content here */}
//                     <div className="flex justify-between">
//                         <div className='w-32 py-8'>
//                             <img src={Logo} alt="" />
//                         </div>
//                         {/* <ThemeToggle /> */}
//                     </div>

//                     <li>
//                         <NavLink to="/dashboard"
//                             className={({ isActive }) => isActive ? "text-[#2fe517] font-bold" : "text-secondary"}>
//                             <FaHome className="inline-block mr-2" />
//                             Home
//                         </NavLink>
//                     </li>

//                     {/* <li>
//                         <NavLink to="/dashboard/Profile"
//                             className={({ isActive }) => isActive ? "text-[#2fe517] font-bold" : "text-secondary"}>
//                             <FaUser className="inline-block mr-2" />
//                             Profile
//                         </NavLink>
//                     </li> */}


//                     <li>
//                         <NavLink to="/dashboard/MyGroup"
//                             className={({ isActive }) => isActive ? "text-[#2fe517] font-bold" : "text-secondary"}>
//                             <FaUserFriends className="inline-block mr-2" />
//                             My Groups
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink to="/dashboard/createGroup"
//                             className={({ isActive }) => isActive ? "text-[#2fe517] font-bold" : "text-secondary"}>
//                             <FaPlusCircle className="inline-block mr-2" />
//                             Create Group
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default DashBoard;

import { FaHome, FaPlusCircle, FaUserFriends } from 'react-icons/fa';
import Logo from '../../assets/Hobby Hub.png';
import { NavLink, Outlet } from "react-router";
import { FaUsersRays } from 'react-icons/fa6';
import NavBar from '../NavBar/NavBar';

const DashBoard = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="drawer lg:drawer-open">
                {/* Toggle checkbox to open/close drawer on small screens */}
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                {/* Page Content */}
                <div className="drawer-content flex flex-col">
                    {/* Top Navbar only visible on small screens */}
                    <div className="navbar bg-base-300 w-full lg:hidden">
                        <div className="flex-none">
                            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2">Dashboard</div>
                    </div>

                    {/* Where the routed child pages show up */}
                    <Outlet />
                </div>

                {/* Sidebar (Drawer Side) */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar Logo */}
                        <div className="flex justify-between">
                            <div className='w-32 py-8'>
                                <img src={Logo} alt="Logo" />
                            </div>
                        </div>

                        {/* Nav Items */}
                        <li>
                            <NavLink to="/dashboard" onClick={() => document.getElementById('my-drawer-2').checked = false}
                                className={({ isActive }) => isActive ? "text-[white] bg-[#6C8EA7] font-bold" : "text-secondary"}>
                                <FaHome className="inline-block mr-2" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/MyGroup" onClick={() => document.getElementById('my-drawer-2').checked = false}
                                className={({ isActive }) => isActive ? "text-[white] bg-[#6C8EA7] font-bold" : "text-secondary"}>
                                <FaUserFriends className="inline-block mr-2" /> My Groups
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/createGroup" onClick={() => document.getElementById('my-drawer-2').checked = false}
                                className={({ isActive }) => isActive ? "text-[white] bg-[#6C8EA7] font-bold" : "text-secondary"}>
                                <FaPlusCircle className="inline-block mr-2" /> Create Group
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
