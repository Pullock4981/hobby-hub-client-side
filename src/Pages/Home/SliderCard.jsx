import React from 'react';

const SliderCard = ({ sData }) => {
    return (
        <div>
            {/* <img src={sData.photo_URL} alt={sData.name} /> */}
            <div className='border-2 border-[] rounded-lg bg-[#2A9261] text-white p-4 mr-4'>
                <div className='flex justify-between gap-4'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img src={sData.photo_URL} alt={sData.name} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm'>Author: {sData.author}</p>
                        <h2 className='text-lg font-semibold'>{sData.name}</h2>
                    </div>
                </div>
                <div className='mt-4 flex md:flex-row flex-col items-center justify-between gap-4'>
                    <p>Members: {sData.member}</p>
                    <p>Category: {sData.category}</p>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;