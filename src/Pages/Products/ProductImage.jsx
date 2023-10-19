import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';


const ProductImage = ({ brandImages }) => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const { img1, img2, img3 } = brandImages;
    console.log(img1)
    return (
        <div>
            <AutoplaySlider play={true}
                cancelOnInteraction={false}
                interval={3000}
                animation="cubeAnimation"
            >
                <div data-src={img1} />
                <div data-src={img2} />
                <div data-src={img3} />

            </AutoplaySlider>

        </div>
    );
};

export default ProductImage;