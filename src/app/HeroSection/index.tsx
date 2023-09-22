import React from 'react'
import HeroCarousel from './HeroCarousel';
import CarouselItem from './CarouselItem';


export const carouselData = [
    {
      title1: 'Strong Industry Focus &',
      title2: 'Technology Expertise',
      description:
        'We provide industry-specific solutions to help enterprises and fast-growing organizations succeed in today’s digital-first world.',
      imageUrl:
        'https://www.vithiitsolutions.com/images/d27bc72948fd2f081233745fa4031f1e.png',
    },
    {
      title1: 'One Team, One Vision,',
      title2: 'One Love - Innovation',
      description:
        'We are a team of passionate people driven by one relentless pursuit- to craft innovative solutions and deliver unparalleled results.',
      imageUrl:
        'https://www.vithiitsolutions.com/images/0f17e499f8b1972e05165b1b5dcd86b9.jpg',
    },
    {
      title1: 'Digital, Business,',
      title2: 'Technology Partners For Success',
      description:
        'We simplify the digital transformation journeys of businesses through smart and innovative software solutions.',
      imageUrl:
        'https://www.vithiitsolutions.com/images/6db973c6f2bdf9fccad7f5f635aa6028.png',
    },
  ];
  

const Hero = () => {
    return (
        <div className='min-w-full '>
            <HeroCarousel>
            {carouselData?.map((item, index) => (
                <CarouselItem key={index} {...item} />
            ))}
            </ HeroCarousel>
        </div>
    );
}

export default Hero;