// Home.jsx
import ContainBox from './Components/ContainBox';
import ImageComponent from './Components/ImageComponent';
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './HeroSection';
import Footer from './Components/Footer/Footer';

const data = [
  {
    headLine: "Transforming Businesses With Innovation",
    ParaGraph: "We are a full-stack software development and analytics company that is committed to building world-class digital products. At Vithi IT Solutions, we place immense value on trust, collaboration and going the extra mile to ensure excellence. We believe our responsibility doesn't end with just delivering a solution. We constantly strive to help you navigate all the complexity of digital transformation to scale your business.",
    link: ["Know More About Us"],
  },
];

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    
      <ContainBox
        header={data[0].headLine}
        para={data[0].ParaGraph}
        link={data[0].link}
      />

     
  < Footer />
    </>
  );
}
