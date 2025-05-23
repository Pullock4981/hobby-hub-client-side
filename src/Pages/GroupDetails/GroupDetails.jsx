// import React from 'react';

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
            .then(res => res.json())
            .then(data => {
                setGroup(data);
                setLoading(false);
            });
    }, [id]);

    const handleJoinGroup = () => {
        if (!user) return;

        // Optional: Check again if already joined (depends on DB setup)

        const joinInfo = {
            groupId: id,
            userEmail: user.email,
            userName: user.displayName,
            joinDate: new Date()
        };

        fetch(`https://hobby-hub-server-tawny.vercel.app/groups`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(joinInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setJoined(true);
                    Swal.fire("Joined!", "You have successfully joined the group.", "success");
                }
            });
    };

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (!group) return <p className="text-center">Group not found.</p>;

    const isPast = new Date(group.startDate) < new Date();

    return (
        <div className="max-w-4xl mx-auto p-6 shadow rounded bg-white mt-6">
            <h2 className="text-3xl font-bold mb-4">{group.groupName}</h2>
            <img src={group.imageURL} alt="Group" className="w-full h-64 object-cover rounded mb-4" />
            <p><strong>Hobby Category:</strong> {group.hobbyCategory}</p>
            <p><strong>Description:</strong> {group.description}</p>
            <p><strong>Location:</strong> {group.location}</p>
            <p><strong>Max Members:</strong> {group.maxMembers}</p>
            <p><strong>Start Date:</strong> {group.startDate}</p>
            <p><strong>Created by:</strong> {group.userName} ({group.userEmail})</p>

            <div className="mt-6">
                {isPast ? (
                    <p className="text-red-500 font-semibold">This group is no longer active.</p>
                ) : joined ? (
                    <p className="text-green-600 font-semibold">You have already joined this group.</p>
                ) : (
                    <button
                        onClick={handleJoinGroup}
                        className="btn btn-primary"
                    >
                        Join Group
                    </button>
                )}
            </div>
        </div>
    );
};

export default GroupDetails;
