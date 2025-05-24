// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router';
// import GroupCard from './GroupCard';
// import Banner from './Banner';
// import SliderComponent from './SliderComponent';
// import { Fade } from 'react-awesome-reveal';
// import HobbyAwesomeReveal from './HobbyAwesomeReveal';
// import CountSection from './CountSection';
// import StaticSectionTwo from './StaticSectionTwo';
// import { AuthContext } from '../../Contexts/AuthContext';
// import ThemeToggle from '../../Components/Theme/ThemeToggle';
// // import ThemeToggle from '../../Components/ThemeToggle,jsx';

// const Home = () => {
//     // group data find by useLoaderData
//     const groupData = useLoaderData();
//     console.log(groupData);
//     const { user } = useContext(AuthContext)
//     // console.log(user.email)
//     // const allGroups = useLoaderData();
//     // console.log(allGroups)
//     const allOtherGroup = groupData.filter(
//         group => group.userEmail !== user?.email);
//     // console.log(allOtherGroup)
//     const today = new Date();

//     const filteredGroups = allOtherGroup.filter(group => {
//         const startDate = new Date(group.startDate);
//         startDate.setHours(0, 0, 0, 0);
//         today.setHours(0, 0, 0, 0);
//         return startDate >= today;
//     });

//     const groups = filteredGroups.slice(0, 6);
//     return (
//         <div className='bg-[#E3F0E9]'>

//             <div className="bg-base-200 min-h-screen text-base-content">
//                 <div className="p-4 flex justify-end">
//                     <ThemeToggle />
//                 </div>
//                 <h1 className="text-3xl font-bold text-center">Welcome to the Hobby Hub</h1>
//                 {/* other content */}
//             </div>

//             <div>
//                 <HobbyAwesomeReveal></HobbyAwesomeReveal>
//             </div>
//             <div className=''>
//                 <SliderComponent></SliderComponent>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-6xl mx-4  md:mx-auto py-10'>

//                 {
//                     groups.map(group => (
//                         <GroupCard key={group._id} group={group} />
//                     ))
//                 }
//             </div>
//             <StaticSectionTwo></StaticSectionTwo>
//             <CountSection></CountSection>
//         </div>
//     );
// };

// export default Home;

// import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';
import Banner from './Banner';
import SliderComponent from './SliderComponent';
import HobbyAwesomeReveal from './HobbyAwesomeReveal';
import CountSection from './CountSection';
import StaticSectionTwo from './StaticSectionTwo';
import { AuthContext } from '../../Contexts/AuthContext';
import ThemeToggle from '../../Components/Theme/ThemeToggle';
import { useContext } from 'react';

const Home = () => {
    const groupData = useLoaderData();
    const { user } = useContext(AuthContext);

    const allOtherGroup = groupData.filter(group => group.userEmail !== user?.email);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredGroups = allOtherGroup.filter(group => {
        const startDate = new Date(group.startDate);
        startDate.setHours(0, 0, 0, 0);
        return startDate >= today;
    });

    const groups = filteredGroups.slice(0, 6);

    return (
        <div className="bg-base-200 text-base-content min-h-screen transition-colors duration-300">
            {/* Theme Toggle */}
            <div className="p-4 flex justify-end">
                <ThemeToggle />
            </div>

            {/* <h1 className="text-3xl font-bold text-center">Welcome to the Hobby Hub</h1> */}

            {/* Banner / Reveal / Slider */}
            <HobbyAwesomeReveal />
            <SliderComponent />

            {/* Featured Groups */}
            <div className="py-10 md:max-w-6xl mx-4 md:mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">Featured Groups</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groups.map(group => (
                        <GroupCard key={group._id} group={group} />
                    ))}
                </div>
            </div>

            {/* Static Sections */}
            <StaticSectionTwo />
            <CountSection />
        </div>
    );
};

export default Home;
