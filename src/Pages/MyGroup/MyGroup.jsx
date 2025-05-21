// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

// const MyGroup = () => {
//     return (
//         <div>
//             <h1>
//                 This is the My Group Page
//             </h1>
//         </div>
//     );
// };

// export default MyGroup;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthContext";
// import Swal from "sweetalert2";

const MyGroup = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch groups created by the logged-in user
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/groups?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyGroups(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user]);

    // Delete handler
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/groups/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setMyGroups(prev => prev.filter(group => group._id !== id));
                            Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
                        }
                    });
            }
        });
    };

    if (loading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-semibold mb-6">My Groups</h2>
            {myGroups.length === 0 ? (
                <p>You haven't created any groups yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
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
                                        <button
                                            onClick={() => window.location.href = `/updateGroup/${group._id}`}
                                            className="btn btn-sm btn-warning mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(group._id)}
                                            className="btn btn-sm btn-error"
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
