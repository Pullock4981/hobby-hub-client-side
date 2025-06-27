// // import React, { use } from 'react';
// // import { useLoaderData } from 'react-router';
// // import { AuthContext } from '../Provider/AuthProvider';

// import { use } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { useLoaderData } from "react-router";

// const DashboardHome = () => {

//     const { user } = use(AuthContext);
//     console.log(user);
//     const groupsData = useLoaderData();
//     // console.log(groupsData);

//     // Count totals
//     const totalGroups = groupsData?.length || 0;
//     const myGroups = groupsData?.filter(group => group.userEmail === user?.email);
//     const myGroupCount = myGroups?.length || 0;



//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-black">
//                 <div className="bg-blue-100 p-6 rounded-xl shadow">
//                     <h3 className="text-xl font-semibold">Total Groups</h3>
//                     <p className="text-3xl">{totalGroups}</p>
//                 </div>
//                 <div className="bg-green-100 p-6 rounded-xl shadow">
//                     <h3 className="text-xl font-semibold">My Groups</h3>
//                     <p className="text-3xl">{myGroupCount}</p>
//                 </div>
//                 <div className="bg-yellow-100 p-6 rounded-xl shadow">
//                     <h3 className="text-xl font-semibold">Joined Groups</h3>
//                     <p className="text-3xl">{user?.balance || 0}</p>
//                     <p><span className='text-xs text-red-700 shadow-sm'>Function isn't added yet</span></p>
//                 </div>
//             </div>

//             {/* Logged-in User Info */}
//             <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
//                 <img src={user?.photoURL} alt="User" className="w-16 h-16 rounded-full border-2 border-gray-300" />
//                 <div>
//                     <h3 className="text-lg  font-bold">{user?.displayName}</h3>
//                     <p className="text-gray-600">{user?.email}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardHome;
import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useLoaderData } from "react-router";

const DashboardHome = () => {
    const { user } = use(AuthContext);
    const groupsData = useLoaderData();

    const totalGroups = groupsData?.length || 0;
    const myGroups = groupsData?.filter(group => group.userEmail === user?.email);
    const myGroupCount = myGroups?.length || 0;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-base-content">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#E6E9EA] p-6 rounded-xl shadow">
                    <h3 className="text-xl text-black font-semibold">Total Groups</h3>
                    <p className="text-3xl text-black">{totalGroups}</p>
                </div>
                <div className="bg-[#c3adcd] p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold">My Groups</h3>
                    <p className="text-3xl">{myGroupCount}</p>
                </div>
                <div className="bg-[#b98db3] p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold">Joined Groups</h3>
                    <p className="text-3xl">{user?.balance || 0}</p>
                    <p><span className='text-xs'>Function isn't added yet</span></p>
                </div>
            </div>

            {/* Logged-in User Info */}
            <div className="bg-base-100 text-base-content p-6 rounded-xl shadow flex items-center gap-4">
                <img src={user?.photoURL} alt="User" className="w-16 h-16 rounded-full border-2 border-base-200" />
                <div>
                    <h3 className="text-lg font-bold">{user?.displayName}</h3>
                    <p className="text-sm opacity-70">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
