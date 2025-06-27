import React from 'react';

const SliderCard = ({ sData }) => {
    return (
        <div>
            <div className="rounded-lg text-black p-4 mr-4 bg-gradient-to-br from-[#6C8EA7] via-[#c3adcd] to-[#B086AB] transition-colors duration-300">
                <div className='flex justify-between gap-4'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img src={sData.photo_URL} alt={sData.name} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm text-black'>Author: {sData.author}</p>
                        <h2 className='text-lg font-semibold text-black'>{sData.name}</h2>
                    </div>
                </div>
                <div className='mt-4 flex md:flex-row flex-col items-center justify-between gap-4'>
                    <p className='text-black'>Members: {sData.member}</p>
                    <p className='text-black'>Category: {sData.category}</p>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;
