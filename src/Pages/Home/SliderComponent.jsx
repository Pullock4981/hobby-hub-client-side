import React from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SliderComponent = () => {

    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <h1>
                Slider Component
            </h1>

            <div className=''>
                {
                    window.innerWidth > 768 ?
                        <Slider {...settings1} className='md:mx-16 mx-2 my-8'>
                            <div>
                                <h3>1</h3>
                                <p>Slider Item 1</p>
                            </div>
                            <div>
                                <h3>2</h3>
                                <p>Slider Item 2</p>
                            </div>
                            <div>
                                <h3>3</h3>
                                <p>Slider Item 3</p>
                            </div>
                            {/* {
                                sliderData.map(sData => <SliderCard key={sData.id} sData={sData}></SliderCard>)
                            } */}
                        </Slider>
                        :
                        <Slider {...settings2} className='md:mx-16 mx-2 my-8'>
                            <div>
                                <h3>1</h3>
                                <p>Slider Item 1</p>
                            </div>
                            <div>
                                <h3>2</h3>
                                <p>Slider Item 2</p>
                            </div>
                            <div>
                                <h3>3</h3>
                                <p>Slider Item 3</p>
                            </div>
                            {/* {
                                sliderData.map(sData => <SliderCard key={sData.id} sData={sData}></SliderCard>)
                            } */}
                        </Slider>
                }
            </div>

        </div>
    );
};

export default SliderComponent;