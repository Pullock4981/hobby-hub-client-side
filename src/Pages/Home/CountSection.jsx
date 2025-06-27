
import React from 'react';
import CountUp from 'react-countup';
// import CountUp from 'react-countup';

const CountSection = () => {
    return (
        <div className="pb-10 md:px-10 px-4">
            <h1 className="md:text-3xl text-xl font-bold text-center my-5 text-base-content">
                Explore Our Groups...
            </h1>
            <p className="text-center md:text-base text-xs text-base-content/70 mb-5">
                Our platform connects you with verified,
                experienced Lawyers across various specialities — all at your convenience.
            </p>

            {/* card section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                    { label: 'Total Groups', end: 100 },
                    { label: 'Total Comments', end: 467 },
                    { label: 'Total Likes', end: 1900 },
                    { label: 'Total Count', end: 300 },
                ].map(({ label, end }) => (
                    <div
                        key={label}
                        className="p-5 rounded-xl bg-base-100 text-green-500 shadow-md text-center transition-colors duration-300"
                    >
                        <p className="text-3xl font-bold text-[#b98db3]">
                            <CountUp start={0} end={end} duration={5} suffix="+" />
                        </p>
                        <p className="opacity-80 text-[#6c90a7]">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountSection;
