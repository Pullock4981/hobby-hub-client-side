


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyGroup = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://hobby-hub-server-tawny.vercel.app/groups?creatorEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyGroups(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to load groups", err);
                    setLoading(false);
                });
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Delete this group?',
            text: 'This action is irreversible!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://hobby-hub-server-tawny.vercel.app/groups/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setMyGroups(prev => prev.filter(group => group._id !== id));
                            Swal.fire('Deleted!', 'Your group has been removed.', 'success');
                        }
                    });
            }
        });
    };

    if (loading) {
        return <div className="text-center mt-10"><span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-xl"></span></div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-semibold mb-6">My Created Groups</h2>
            {myGroups.length === 0 ? (
                <p className="text-gray-600">You haven’t created any groups yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
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

