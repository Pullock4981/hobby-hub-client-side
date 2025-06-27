
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router";

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileData, setProfileData] = useState(null);

    const defaultName = 'Anonymous User';
    const defaultEmail = 'Email not available';
    const defaultPhoto = 'https://ui-avatars.com/api/?name=User&background=random';
    const defaultBio =
        "👋 Welcome! This feature hasn't been added yet. Come back later for this section.";

    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user || {};


    const handleSave = (data) => {
        console.log('Updated Profile:', data);
        setProfileData(data);
    };

    return (
        <div className="w-full max-w-5xl mx-auto  rounded-2xl shadow-2xl overflow-hidden mt-10">
            {/* Cover */}
            <div className="h-48 bg-gradient-to-br from-[#6C8EA7] via-[#c3adcd] to-[#B086AB]  relative">
                <div className="absolute -bottom-14 left-6">
                    <img
                        className="h-28 w-28 rounded-full border-4 border-white shadow-lg object-cover"
                        src={photoURL || defaultPhoto}
                        alt={displayName || defaultName}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="pt-20 pb-8 px-6 sm:px-10 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between">
                    <div>
                        <h2 className="text-3xl text-gradient-to-br from-[#6C8EA7] via-[#c3adcd] to-[#B086AB] font-bold">
                            {displayName || defaultName}
                        </h2>
                        <p className=" text-sm mt-1">
                            {email || defaultEmail}
                        </p>
                    </div>

                    <div className="mt-6 sm:mt-0 flex flex-wrap gap-3 justify-center sm:justify-end">

                        {/* <button className="bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl hover:bg-gray-300 transition">
                            Message
                        </button> */}

                        {/* search option */}

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-4 pr-10 py-2.5 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-60 transition"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z" />
                            </svg>
                        </div>


                        <Link to='/dashboard/myGroup'>
                            <button className="bg-[#6C8EA7] cursor-pointer text-white font-semibold px-5 py-2.5 rounded-xl">
                                My Groups
                            </button>
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#B086AB] text-white px-5 py-2.5 rounded-xl font-semibold cursor-pointer"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Bio */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold ">About</h3>
                    <p className=" mt-2 text-sm leading-relaxed">{defaultBio}</p>
                </div>

                {/* Social Links */}
                {/* <SocialsProfile></SocialsProfile> */}
            </div>

            {/* Profile Update Modal */}
            {/* <ProfileUpdateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                initialData={profileData}
            /> */}
        </div>
    );
};

export default Profile;