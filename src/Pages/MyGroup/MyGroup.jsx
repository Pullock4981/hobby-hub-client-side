

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import Swal from "sweetalert2";
// import { Link } from "react-router";




// const MyGroup = () => {
//     const { user } = useContext(AuthContext);
//     const [myGroups, setMyGroups] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Fetch only groups created by the logged-in user
//     useEffect(() => {
//         if (user?.email) {
//             fetch(`https://hobby-hub-server-tawny.vercel.app/groups?creatorEmail=${user.email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setMyGroups(data);
//                     setLoading(false);
//                 })
//                 .catch(err => {
//                     console.error(err);
//                     setLoading(false);
//                 });
//         }
//     }, [user]);

//     // Delete handler
//     const handleDelete = (_id) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, delete it!'
//         }).then(result => {
//             if (result.isConfirmed) {
//                 fetch(`https://hobby-hub-server-tawny.vercel.app/groups/${_id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.deletedCount > 0) {
//                             setMyGroups(prev => prev.filter(group => group._id !== _id));
//                             Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
//                         }
//                     });
//             }
//         });
//     };

//     if (loading) return <div className="text-center mt-10">Loading...</div>;

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-6">
//             <h2 className="text-3xl font-semibold mb-6">My Created Groups</h2>
//             {myGroups.length === 0 ? (
//                 <p>You haven't created any groups yet.</p>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="table w-full">
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 <th>Group Name</th>
//                                 <th>Hobby</th>
//                                 <th>Max Members</th>
//                                 <th>Start Date</th>
//                                 <th>Location</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {myGroups.map((group, index) => (
//                                 <tr key={group._id}>
//                                     <td>{index + 1}</td>
//                                     <td>{group.groupName}</td>
//                                     <td>{group.hobbyCategory}</td>
//                                     <td>{group.maxMembers}</td>
//                                     <td>{group.startDate}</td>
//                                     <td>{group.location}</td>
//                                     <td>
//                                         <Link to={`/updateGroup/${group._id}`}>
//                                             <button className="btn btn-sm btn-warning mr-2">Update</button>
//                                         </Link>
//                                         <button
//                                             onClick={() => handleDelete(group._id)}
//                                             className="btn btn-sm btn-error"
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyGroup;


// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom"; // Corrected router import

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyGroup = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch groups created by the current user only
    useEffect(() => {
        if (user?.email) {
            fetch(`https://hobby-hub-server-tawny.vercel.app/groups?creatorEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyGroups(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching groups:", err);
                    setLoading(false);
                });
        }
    }, [user]);

    // Delete a group after confirmation
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hobby-hub-server-tawny.vercel.app/groups/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setMyGroups(prev => prev.filter(group => group._id !== _id));
                            Swal.fire('Deleted!', 'Group has been removed.', 'success');
                        }
                    })
                    .catch(err => {
                        console.error("Deletion failed:", err);
                        Swal.fire('Error!', 'Failed to delete the group.', 'error');
                    });
            }
        });
    };

    if (loading) {
        return <div className="text-center mt-10 text-lg font-medium">Loading...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-semibold mb-6">My Created Groups</h2>

            {myGroups.length === 0 ? (
                <p className="text-gray-600">You haven’t created any groups yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>#</th>
                                <th>Group Name</th>
                                <th>Hobby</th>
                                <th>Max Members</th>
                                <th>Start Date</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myGroups.map((group, index) => (
                                <tr key={group._id}>
                                    <td>{index + 1}</td>
                                    <td>{group.groupName}</td>
                                    <td>{group.hobbyCategory}</td>
                                    <td>{group.maxMembers}</td>
                                    <td>{group.startDate}</td>
                                    <td>{group.location}</td>
                                    <td>
                                        <Link to={`/updateGroup/${group._id}`}>
                                            <button className="btn btn-sm bg-[#2A9261] text-white mr-2">Update</button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(group._id)}
                                            className="btn btn-sm bg-red-500 text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyGroup;
