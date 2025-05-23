import React from 'react';
import { Link } from 'react-router';



const GroupCard = ({ group }) => {
    console.log(group);
    const { groupName, description } = group;
    return (
        <div className='flex justify-center  '>
            <div className="card card-border border-2 w-full bg-[#2A9261]">
                <div className="card-body text-white">
                    <h2 className="card-title">{groupName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/groupDetails/${group._id}`}><button className="cursor-pointer rounded-lg font-medium px-3 py-2 bg-[#1D6D4D]">Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;