// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router";

// const AllGroups = () => {
//     return (
//         <div>
//             <h1>All Groups</h1>
//         </div>
//     );
// };

// export default AllGroups;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const AllGroups = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/groups')
            .then(res => res.json())
            .then(data => {
                setGroups(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching groups:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-semibold mb-6">All Hobby Groups</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {groups.map(group => (
                    <div key={group._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={group.imageURL} alt={group.groupName} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{group.groupName}</h2>
                            <p><strong>Category:</strong> {group.hobbyCategory}</p>
                            <p><strong>Location:</strong> {group.location}</p>
                            <p><strong>Start Date:</strong> {group.startDate}</p>
                            <Link to={`/groupDetails/${group._id}`}>
                                <button className="btn btn-primary mt-3 w-full">See More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllGroups;
