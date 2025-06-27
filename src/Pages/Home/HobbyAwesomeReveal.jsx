import React from 'react';
import { Fade } from "react-awesome-reveal";

const HobbyAwesomeReveal = () => {
    return (
        <div className="bg-gradient-to-br from-[#6C8EA7] via-[#c3adcd] to-[#B086AB] flex items-center md:mx-16 mx-0 justify-center p-6 transition-colors duration-300">
            <div className="w-full bg-base-100 rounded-lg shadow-xl p-5 md:p-4 text-base-content">
                <Fade>
                    <h1 className="text-xl md:text-3xl font-extrabold mb-2 text-center bg-gradient-to-br from-[#6C8EA7] via-[#c3adcd] to-[#B086AB] bg-clip-text text-transparent">
                        Welcome to HobbyHub!
                    </h1>
                    <p className="md:text-lg text-center mb-5 leading-relaxed">
                        Discover and join local hobby groups, or create your own community around your passions.
                    </p>
                </Fade>

                <Fade cascade damping={1}>
                    <h2 className="md:text-xl font-semibold mb-4 border-b border-[#2A9261] pb-2 text-center">
                        Why HobbyHub?
                    </h2>
                    <ul className="list-disc list-inside space-y-1 md:text-lg">
                        <li className="hover:text-[#b98db3] transition-colors duration-300 cursor-pointer">
                            Connect with people who share your interests
                        </li>
                        <li className="hover:text-[#b98db3] transition-colors duration-300 cursor-pointer">
                            Easily create and manage your own hobby groups
                        </li>
                        <li className="hover:text-[#b98db3] transition-colors duration-300 cursor-pointer">
                            Responsive design with smooth animations for all devices
                        </li>
                    </ul>
                </Fade>
            </div>
        </div>
    );
};

export default HobbyAwesomeReveal;
