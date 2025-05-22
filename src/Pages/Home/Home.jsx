import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';
import Banner from './Banner';

const Home = () => {
    // group data find by useLoaderData
    const groupData = useLoaderData();
    console.log(groupData);
    return (
        <div>
            <h1>
                This is the Home Page
                <div>
                    <Banner></Banner>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-7xl mx-auto'>
                    {
                        groupData.map(group => (
                            <GroupCard key={group._id} group={group} />
                        ))
                    }
                </div>
            </h1>
        </div>
    );
};

export default Home;