"use client"
import React, { ReactNode, useEffect, useState } from 'react';

interface HeroCarouselProps {
  children: ReactNode;
}

const HeroCarousel = ({ children }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (Array.isArray(children)) {
        return (prevSlide + 1) % children.length;
      }
      return prevSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? (Array.isArray(children) ? children.length - 1 : 0) : prevSlide - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative bg-white">
      <div className="w-full">
        <button
          className="absolute z-10 left-2 md:left-36 top-3/4 transform -translate-y-1/2 p-1.5 bg-transparent text-slate-600 rounded-full border border-slate-600"
          onClick={prevSlide}
        >
          &lt;
        </button>

        <button
          className="absolute z-10 right-2 md:right-auto md:left-48 top-3/4 transform -translate-y-1/2 p-1.5 bg-transparent text-slate-600 rounded-full border border-slate-600"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
      {React.Children.map(children, (child, index) => {
        if (index === currentSlide) {
          return child;
        }
        return null;
      })}
    </div>
  );
};

export default HeroCarousel;
