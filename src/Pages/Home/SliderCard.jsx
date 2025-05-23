import React from 'react';

const SliderCard = ({ sData }) => {
    return (
        <div>
            {/* <img src={sData.photo_URL} alt={sData.name} /> */}
            <div className='border-2 border-[] rounded-lg bg-[#2A9261] text-white p-4 mr-4'>
                <div className='flex items-center justify-between gap-4'>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={sData.photo_URL} alt={sData.name} />
                        </div>
                    </div>
                    <div>
                        <p>Author: {sData.author}</p>
                        <h2>{sData.name}</h2>
                    </div>
                </div>
                <div>
                    <p>Members: {sData.member}</p>
                    <p>Category: {sData.category}</p>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;