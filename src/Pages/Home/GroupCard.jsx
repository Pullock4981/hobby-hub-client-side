import React from 'react';
import { Link } from 'react-router';

const GroupCard = ({ group }) => {
    console.log(group);
    const { groupName, description } = group;
    return (
        <div>
            <div className="card card-border bg-base-100 w-96">
                <div className="card-body">
                    <h2 className="card-title">{groupName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/groupDetails/${group._id}`}><button className="btn btn-primary">Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;