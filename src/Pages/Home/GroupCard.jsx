

import React from 'react';
import { Link } from 'react-router';


const GroupCard = ({ group }) => {
    const { _id, groupName, description, location, maxMembers, hobbyCategory, startDate } = group;

    return (
        <div className="flex justify-center">
            <div className="card border bg-[#2A9261] shadow-lg w-full max-w-sm hover:shadow-xl transition-all duration-300">
                <div className="card-body text-white">
                    <h2 className="text-2xl font-bold mb-2 text-white">{groupName}</h2>

                    <div className='flex justify-between'>
                        <p className="text-sm mb-2">
                            <span className="font-semibold">Cetagory:</span> {hobbyCategory}
                        </p>
                        <p className="text-sm mb-1">
                            <span className="font-semibold">Location:</span> {location}
                        </p>
                    </div>

                    <div className='flex justify-between'>
                        <p>
                            <span className="font-semibold">Starting Date:</span> {startDate}
                        </p>

                        <p className="text-sm mb-2">
                            <span className="font-semibold">Max Members:</span> {maxMembers}
                        </p>
                    </div>

                    <p className="text-sm mb-2">
                        <span className="font-semibold">Description:</span> {description}
                    </p>

                    <div className="card-actions justify-end">
                        <Link to={`/groupDetails/${_id}`}>
                            <button className="px-4 py-2 rounded-lg bg-[#172e23] text-white font-medium hover:bg-[#1D6D4D] transition">
                                Show Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;


