import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterComponent = () => {
    return (
        <div className=" mt-4 lg:mt-8 md:text-3xl text-xl font-bold text-center pb-6">
            <span>Meet hobbyists who love&nbsp;</span>
            <span className="text-red-500 inline-block">
                <Typewriter
                    words={['Photography', 'Gardening', 'Coding', 'Baking', 'Painting', 'Cycling', 'and More.......']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </span>
        </div>

    );
};

export default TypewriterComponent;