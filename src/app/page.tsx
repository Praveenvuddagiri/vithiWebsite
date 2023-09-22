// Home.jsx
import ContainBox from './Components/ContainBox';
import ImageComponent from './Components/ImageComponent';
import React from 'react';
import Navbar from './Components/Navbar';

const data = [
  {
    headLine: "Transforming Businesses With Innovation",
    ParaGraph: "We are a full-stack software development and analytics company that is committed to building world-class digital products. At Vithi IT Solutions, we place immense value on trust, collaboration and going the extra mile to ensure excellence. We believe our responsibility doesn't end with just delivering a solution. We constantly strive to help you navigate all the complexity of digital transformation to scale your business.",
    link: ["Know More About Us"],
  },
];

const imageUrls = {
  image1: 'http://www.vithiitsolutions.com/images/4b12216502d3566707e37c109ec622c8.png', // Replace with the actual URL for image1
  image2: 'http://www.vithiitsolutions.com/images/cd2dd0d095bb3ba0958482abbb3d4baa.png', // Replace with the actual URL for image2
};

export default function Home() {
  return (
    <div className="flex justify-evenly sm:flex-row gap-2 sm:gap-8 md:gap-2">
      
      <ImageComponent image1={imageUrls.image1} image2={imageUrls.image2} />
   
      <ContainBox
        header={data[0].headLine}
        para={data[0].ParaGraph}
        link={data[0].link}
      />

      <Navbar />
      <Home />
    </div>
  );
}
