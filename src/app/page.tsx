// Home.jsx
import ContentBox from './Components/ContentBox';
import ImageComponent from './Components/ImageComponent';
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './HeroSection';
import HomeServicesBox from './Components/HomeServicesBox';
import { Metadata } from 'next';
import VideoBackgroundComponent from './Components/VideoBackgroundComponent';
import MoveToTop from './Components/MoveToUp';
import FullContactForm from './Components/FullContactForm';
import { data } from '@/constant';
import Footer from './Footer/Footer';


export const metadata: Metadata = {
  title: 'Home',
  description: 'VITHI IT SOLUTIONS',
}



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-evenly sm:flex-row gap-2 sm:gap-8 md:gap-2">
        <ImageComponent image1={data[0].imageUrls.image1} image2={data[0].imageUrls.image2} />
        <ContentBox
          header={data[0].headLine}
          para={data[0].ParaGraph}
          link={data[0].link}
        />
      </div>


      <HomeServicesBox />

      <div className="flex flex-row-reverse sm:flex-row gap-2 sm:gap-8 md:gap-2">
        <ImageComponent image1={data[1].imageUrls.image1} image2={data[1].imageUrls.image2} />
        <ContentBox
          header={data[1].headLine}
          para={data[1].ParaGraph}
          link={data[1].link}
        />
      </div>

      <div className="flex justify-evenly sm:flex-row gap-2 sm:gap-8 md:gap-2">
        <ImageComponent image1={data[2].imageUrls.image1} image2={data[2].imageUrls.image2} />
        <ContentBox
          header={data[2].headLine}
          para={data[2].ParaGraph}
          link={data[2].link}
        />
      </div>

      <div className="flex justify-evenly sm:flex-row gap-2 sm:gap-8 md:gap-2">
        <ImageComponent image1={data[3].imageUrls.image1} image2={data[3].imageUrls.image2} />
        <ContentBox
          header={data[3].headLine}
          para={data[3].ParaGraph}
          link={data[3].link}
        />
      </div>

      <VideoBackgroundComponent />
      <FullContactForm />

      <MoveToTop />

      <Footer />
    </>

  );
}
