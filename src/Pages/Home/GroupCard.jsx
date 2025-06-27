import React from 'react';
import { Link } from 'react-router';

const GroupCard = ({ group }) => {
    const { _id, groupName, image, description, location, hobbyCategory } = group;

    return (
        <div>
            <div className="rounded-lg p-4 mr-4 bg-gradient-to-br from-[#6C8EA7] via-[#c3adcd] to-[#B086AB] text-white transition-colors duration-300 max-w-sm shadow-lg">
                <img className="h-40 w-full object-cover rounded-md mb-4" src={image} alt={groupName} />

                <h2 className="text-2xl font-bold mb-2">{groupName}</h2>

                <div className="flex justify-between mb-2 text-white/90 text-sm">
                    <p><span className="font-semibold">Category:</span> {hobbyCategory}</p>
                    <p><span className="font-semibold">Location:</span> {location}</p>
                </div>

                {/* <div className="mb-2 text-white/90 text-sm">
                    <p><span className="font-semibold">Starting Date:</span> {startDate}</p>
                    <p><span className="font-semibold">Max Members:</span> {maxMembers}</p>
                </div> */}

                <p className="text-white/90 text-sm mb-4">
                    <span className="font-semibold">Description:</span> {description}
                </p>

                <div className="flex justify-end">
                    <Link to={`/groupDetails/${_id}`}>
                        <button className="px-4 py-2 rounded-lg bg-gradient-to-br from-[#6C8EA7] via-[#c3adcd] to-[#6C8EA7] text-black cursor-pointer font-medium transition">
                            Show Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;
