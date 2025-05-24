import React from 'react';
import CountUp from 'react-countup';

const CountSection = () => {
    return (
        <div className='pb-10 md:px-10 px-4'>
            <h1 className='md:text-3xl text-xl font-bold text-center my-5'>
                Explore Our groups...
            </h1>
            <p className='text-center md:text-base text-xs text-gray-500 mb-5'>
                Our platform connects you with verified,
                experienced Lawyers across various specialities — all at your convenience.
            </p>
            {/* card section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='p-5 rounded-xl bg-gray-100'>
                    {/* <img src={successImg1} alt="" /> */}
                    <p className='text-3xl font-bold'>
                        <CountUp start={0} end={100} duration={5} suffix="+" />
                    </p>
                    <p className='text-gray-500'>
                        Total Groups
                    </p>
                </div>
                <div className='p-5 rounded-xl bg-gray-100'>
                    {/* <img src={successImg2} alt="" /> */}
                    <p className='text-3xl font-bold'>
                        <CountUp start={0} end={467} duration={5} suffix="+" />
                    </p>
                    <p className='text-gray-500'>
                        Total Comments
                    </p>
                </div>
                <div className='p-5 rounded-xl bg-gray-100'>
                    {/* <img src={successImg3} alt="" /> */}
                    <p className='text-3xl font-bold'>
                        <CountUp start={0} end={1900} duration={5} suffix="+" />
                    </p>
                    <p className='text-gray-500'>
                        Total Likes
                    </p>
                </div>
                <div className='p-5 rounded-xl bg-gray-100'>
                    {/* <img src={successImg4} alt="" /> */}
                    <p className='text-3xl font-bold'>
                        <CountUp start={0} end={300} duration={5} suffix="+" />
                    </p>
                    <p className=' text-gray-500'>
                        Total Count
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CountSection;