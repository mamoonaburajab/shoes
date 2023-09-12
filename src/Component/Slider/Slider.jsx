import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';
import sandel1 from '../../assets/image/sandel1.jpg';
import sandel2 from '../../assets/image/sandel2.jpg';
import sandel3 from '../../assets/image/sandel3.jpg';
import sandel4 from '../../assets/image/sandel4.jpg';
import sandel5 from '../../assets/image/sandel5.jpg';
import sandel6 from '../../assets/image/sandel6.jpg';
import sandel7 from '../../assets/image/sandel7.jpg';
import sandel8 from '../../assets/image/sandel8.jpg';
import sandel11 from '../../assets/image/sandel11.jpg';
import sandel9 from '../../assets/image/sandel9.jpg';
import sandel10 from '../../assets/image/sandel10.jpg';


const Slider = () => {
    const images = [
        sandel1,
        sandel2,
        // sandel3,
        sandel4,
        sandel5,
        sandel6,
        sandel7,
        sandel8,
        sandel9,
        sandel11,
        sandel10

    ];

    return (
        <div className="slider-container">
            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className='slidImg' src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;