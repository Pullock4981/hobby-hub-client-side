import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const GroupDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [group, setGroup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [joined, setJoined] = useState(false);

    useEffect(() => {
        fetch(`https://hobby-hub-server-tawny.vercel.app/groups/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setGroup(data);
                setLoading(false);
            });
    }, [id]);

    const handleJoinGroup = () => {
        if (!user) {
            Swal.fire("Login Required", "Please log in to join a group.", "info");
            return;
        }

        Swal.fire("Joined!", "You have successfully joined the group.", "success");
        setJoined(true);
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
                <span className="loading loading-ball loading-xl"></span>
            </div>
        );
    }

    if (!group)
        return <p className="text-center text-base-content">Group not found.</p>;

    const isPast = new Date(group.startDate) < new Date();

    return (
        <div className="max-w-4xl mx-auto p-6 shadow rounded bg-base-200 text-base-content my-6 transition-colors duration-300">
            <img
                src={group.image}
                alt="Group"
                className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-3xl font-bold mb-4">{group.groupName}</h2>

            <div className="space-y-1">
                <div className="flex justify-between flex-col md:flex-row">
                    <div>
                        <p><strong>Group Category:</strong> {group.hobbyCategory}</p>
                    </div>
                    <div>
                        <p><strong>Location:</strong> {group.location}</p>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                    <p><strong>Max Members:</strong> {group.maxMembers}</p>
                    <p><strong>Start Date:</strong> {group.startDate}</p>
                </div>
                <p><strong>Description:</strong> {group.description}</p>
                <p><strong>Created by:</strong> {group.userName} ({group.userEmail})</p>
            </div>

            <div className="mt-6">
                {isPast ? (
                    <p className="text-error font-semibold">This group is no longer active.</p>
                ) : joined ? (
                    <p className="text-success font-semibold">You have already joined this group.</p>
                ) : (
                    <button
                        onClick={handleJoinGroup}
                        className="btn bg-[#6C8EA7] text-white hover:bg-[#257c53]"
                    >
                        Join Group
                    </button>
                )}
            </div>
        </div>
    );
};

export default GroupDetails;
