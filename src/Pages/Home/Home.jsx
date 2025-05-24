import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';
import Banner from './Banner';
import SliderComponent from './SliderComponent';
import { Fade } from 'react-awesome-reveal';
import HobbyAwesomeReveal from './HobbyAwesomeReveal';
import CountSection from './CountSection';
import StaticSectionTwo from './StaticSectionTwo';
import { AuthContext } from '../../Contexts/AuthContext';

const Home = () => {
    // group data find by useLoaderData
    const groupData = useLoaderData();
    console.log(groupData);
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    // const allGroups = useLoaderData();
    // console.log(allGroups)
    const allOtherGroup = groupData.filter(
        group => group.userEmail !== user.email);
    // console.log(allOtherGroup)
    const today = new Date();

    const filteredGroups = allOtherGroup.filter(group => {
        const startDate = new Date(group.startDate);
        startDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        return startDate >= today;
    });

    const groups = filteredGroups.slice(0, 6);
    return (
        <div className='bg-[#E3F0E9]'>
            {/* #BFE0CC */}

            <div>
                <HobbyAwesomeReveal></HobbyAwesomeReveal>
            </div>
            <div className=''>
                <SliderComponent></SliderComponent>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-6xl mx-4  md:mx-auto py-10'>

                {
                    groups.map(group => (
                        <GroupCard key={group._id} group={group} />
                    ))
                }
            </div>
            <StaticSectionTwo></StaticSectionTwo>
            <CountSection></CountSection>
        </div>
    );
};

export default Home;