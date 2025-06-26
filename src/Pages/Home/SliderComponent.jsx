// import React from 'react';
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import SliderCard from './SliderCard';

// // fake json data
// const sliderData = [
//     {
//         "_id": "1a2b3c4d5e6f7g8h9i0j",
//         "photo_URL": "https://i.ibb.co/hxN8xs4d/video-1.jpg",
//         "name": "Creative Strokes",
//         "member": 12,
//         "category": "Drawing & Painting",
//         "author": "Ashik"
//     },
//     {
//         "_id": "2b3c4d5e6f7g8h9i0j1a",
//         "photo_URL": "https://i.ibb.co/0RkjdNmm/game-1.jpg",
//         "name": "Gamers Lounge",
//         "member": 20,
//         "category": "Video Gaming",
//         "author": "Jenny"
//     },
//     {
//         "_id": "3c4d5e6f7g8h9i0j1a2b",
//         "photo_URL": "https://i.ibb.co/tT9GLnYr/photo-1.jpg",
//         "name": "Shutter Circle",
//         "member": 15,
//         "category": "Photography",
//         "author": "Kumar"
//     },
//     {
//         "_id": "4d5e6f7g8h9i0j1a2b3c",
//         "photo_URL": "https://i.ibb.co/S4kLNXWx/book-1.jpg",
//         "name": "Lit Minds",
//         "member": 10,
//         "category": "Reading",
//         "author": "Tara"
//     }
// ]



// const SliderComponent = () => {
//     // const { photo_URL, name, member, category } = sData;

//     const settings1 = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1
//     };
//     const settings2 = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <div>
//             <div>
//                 {
//                     window.innerWidth > 768 ?
//                         <Slider {...settings1} className='md:mx-16 mx-2 py-8'>

//                             {
//                                 sliderData.map(sData => <SliderCard key={sData.id} sData={sData}></SliderCard>)
//                             }
//                         </Slider>
//                         :
//                         <Slider {...settings2} className='md:mx-16 mx-2 py-8'>

//                             {
//                                 sliderData.map(sData => <SliderCard key={sData.id} sData={sData}></SliderCard>)
//                             }
//                         </Slider>
//                 }
//             </div>

//         </div>
//     );
// };

// export default SliderComponent;

import React from 'react';
// Import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SliderCard from './SliderCard';

// Fake JSON data
const sliderData = [
    {
        "_id": "1a2b3c4d5e6f7g8h9i0j",
        "photo_URL": "https://i.ibb.co/hxN8xs4d/video-1.jpg",
        "name": "Creative Strokes",
        "member": 12,
        "category": "Drawing & Painting",
        "author": "Ashik"
    },
    {
        "_id": "2b3c4d5e6f7g8h9i0j1a",
        "photo_URL": "https://i.ibb.co/0RkjdNmm/game-1.jpg",
        "name": "Gamers Lounge",
        "member": 20,
        "category": "Video Gaming",
        "author": "Jenny"
    },
    {
        "_id": "3c4d5e6f7g8h9i0j1a2b",
        "photo_URL": "https://i.ibb.co/tT9GLnYr/photo-1.jpg",
        "name": "Shutter Circle",
        "member": 15,
        "category": "Photography",
        "author": "Kumar"
    },
    {
        "_id": "4d5e6f7g8h9i0j1a2b3c",
        "photo_URL": "https://i.ibb.co/S4kLNXWx/book-1.jpg",
        "name": "Lit Minds",
        "member": 10,
        "category": "Reading",
        "author": "Tara"
    }
];

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true, // infinite loop
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className='md:mx-16 mx-2 py-8'>
            <Slider {...settings}>
                {
                    sliderData.map(sData => (
                        <SliderCard key={sData._id} sData={sData} />
                    ))
                }
            </Slider>
        </div>
    );
};

export default SliderComponent;
