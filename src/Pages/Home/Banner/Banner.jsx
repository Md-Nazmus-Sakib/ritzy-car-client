import React from 'react';
import bannerImg1 from '../../../assets/Images/Banner/banner-1.jpg';
import bannerImg2 from '../../../assets/Images/Banner/banner2.jpg';
import bannerImg3 from '../../../assets/Images/Banner/banner3.jpeg';
import bannerImg4 from '../../../assets/Images/Banner/banner4.jpg';

import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div>

            <AutoplaySlider play={true}
                cancelOnInteraction={false}
                interval={6000}
                animation="fallAnimation"

            >

                <div data-src={bannerImg1}>
                    <div className='absolute w-1/2 top-4 right-2 text-red-800'>
                        <h1 className='text-3xl md:text-7xl font-extrabold drop-shadow-2x uppercase' >Find Your Dream Car</h1>

                    </div>
                </div>
                <div data-src={bannerImg2} >
                    <div className='absolute w-1/2 top-6 right-4 text-red-800'>
                        <h1 className='text-3xl md:text-7xl font-extrabold uppercase' >Buy The Car You have always Dreamed</h1>

                    </div>

                </div>
                <div data-src={bannerImg3} >
                    <div className='absolute top-8 left-2'>
                        <h1 className='text-3xl md:text-7xl font-extrabold text-white uppercase' >The Wind is not even close to us</h1>

                    </div>

                </div>
                <div data-src={bannerImg4} >
                    <div className='absolute top-8 left-2'>
                        <h1 className='text-3xl md:text-7xl font-extrabold text-white uppercase' >Find What you are looking for</h1>

                    </div>

                </div>

            </AutoplaySlider>

        </div>

    );
};

export default Banner;