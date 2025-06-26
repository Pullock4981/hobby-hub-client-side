
// import { AuthContext } from '../../Contexts/AuthContext';

// import GroupCard from './GroupCard';
// import Banner from './Banner';
// import SliderComponent from './SliderComponent';
// import HobbyAwesomeReveal from './HobbyAwesomeReveal';
// import CountSection from './CountSection';
// import StaticSectionTwo from './StaticSectionTwo';
// import { useLoaderData } from 'react-router';
// import { useContext } from 'react';

// const Home = () => {
//     const groupData = useLoaderData() || [];
//     const { user } = useContext(AuthContext);

//     // Log to verify data is loading correctly
//     console.log("Loaded group data:", groupData);

//     // Filter out groups created by the current user (if logged in)
//     const allOtherGroup = user
//         ? groupData.filter(group => group.userEmail !== user.email)
//         : groupData;

//     // Filter groups by future startDate
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const filteredGroups = allOtherGroup.filter(group => {
//         const startDate = new Date(group.startDate);
//         if (isNaN(startDate)) return false; // Skip invalid dates
//         startDate.setHours(0, 0, 0, 0);
//         return startDate >= today;
//     });

//     // Limit to 6 featured groups
//     const groups = filteredGroups.slice(0, 6);

//     return (
//         <div className="bg-base-200 text-base-content min-h-screen transition-colors duration-300">
//             {/* Theme Toggle */}
//             <div className="p-4 flex justify-end">
//                 {/* <ThemeToggle /> */}
//             </div>

//             {/* Hero/Banner/Slider */}
//             <HobbyAwesomeReveal />
//             <SliderComponent />

//             {/* Featured Groups */}
//             <div className="py-10 md:max-w-6xl mx-4 md:mx-auto">
//                 <h2 className="text-2xl font-semibold mb-6 text-center">Featured Groups</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {groups.length > 0 ? (
//                         groups.map(group => (
//                             <GroupCard key={group._id} group={group} />
//                         ))
//                     ) : (
//                         <p className="col-span-3 text-center text-gray-500">
//                             No upcoming groups found.
//                         </p>
//                     )}
//                 </div>
//             </div>

//             {/* Static Sections */}
//             <StaticSectionTwo />
//             <CountSection />
//         </div>
//     );
// };

// export default Home;


import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

import GroupCard from './GroupCard';
import Banner from './Banner';
import SliderComponent from './SliderComponent';
import HobbyAwesomeReveal from './HobbyAwesomeReveal';
import CountSection from './CountSection';
import StaticSectionTwo from './StaticSectionTwo';
import ThemeToggle from '../../Components/Theme/ThemeToggle';

const Home = () => {
    const groupData = useLoaderData() || [];
    const { user } = useContext(AuthContext);

    const allOtherGroup = user
        ? groupData.filter(group => group.userEmail !== user.email)
        : groupData;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredGroups = allOtherGroup.filter(group => {
        const startDate = new Date(group.startDate);
        if (isNaN(startDate)) return false;
        startDate.setHours(0, 0, 0, 0);
        return startDate >= today;
    });

    const groups = filteredGroups.slice(0, 6);

    return (
        <div className="bg-base-100 text-base-content min-h-screen transition-colors duration-300">
            {/* Theme Toggle */}
            <div className="p-4 flex justify-end">
                <ThemeToggle />
            </div>

            {/* Hero / Reveal / Slider */}
            <HobbyAwesomeReveal />
            <SliderComponent />

            {/* Featured Groups Section */}
            <section className="py-10 md:max-w-6xl mx-4 md:mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Featured Groups
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {groups.length > 0 ? (
                        groups.map(group => (
                            <GroupCard key={group._id} group={group} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-error font-semibold">
                            No upcoming groups found.
                        </p>
                    )}
                </div>
            </section>

            {/* Static Info Sections */}
            <StaticSectionTwo />
            <CountSection />
        </div>
    );
};

export default Home;
