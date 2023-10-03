import React from 'react'
import HeroCarousel from './HeroCarousel';
import CarouselItem from './CarouselItem';

const Hero = ({carouselData}: {carouselData:any[]}) => {
    return (
        <div className='min-w-full mt-36 md:mt-28 '>
            <HeroCarousel>
            {carouselData?.map((item, index) => (
                <CarouselItem key={index} {...item} />
            ))}
            </ HeroCarousel>
        </div>
    );
}

export default Hero;