import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';
import Banner from './Banner';
import SliderComponent from './SliderComponent';

const Home = () => {
    // group data find by useLoaderData
    const groupData = useLoaderData();
    console.log(groupData);
    return (
        <div className='bg-[#E3F0E9]'>
            {/* #BFE0CC */}
            <h1>
                This is the Home Page
                <div>
                    <SliderComponent></SliderComponent>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-6xl mx-4  md:mx-auto py-10'>
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