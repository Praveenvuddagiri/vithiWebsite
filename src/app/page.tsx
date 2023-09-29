import ContentBox from '../Components/ContentBox';
import ImageComponent from '../Components/ImageComponent';
import React from 'react';
import Hero from '../Components/HeroSection';
import HomeServicesBox from '../Components/HomeServicesBox';
import { Metadata } from 'next';
import VideoBackgroundComponent from '../Components/VideoBackgroundComponent';
// import MoveToTop from './Components/MoveToUp';
import FullContactForm from '../Components/FullContactForm';
import { data } from '@/utilities/constant';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';
import ObjReact from '@/utilities/DynamicComponent';
import MoveToTop from '../Components/MoveToUp';


export const metadata: Metadata = {
  title: 'Home',
  description: 'VITHI IT SOLUTIONS',
}

const props = { active: 'home' };



export default function Home() {
  return (
    <>
      <Navbar active='home' />
      <Hero />
      <div className="flex justify-between flex-col md:flex-row items-center">

        <ImageComponent image1={data[0].imageUrls.image1} image2={data[0].imageUrls.image2} right={false} />
        <ContentBox
          header={data[0].headLine}
          para={data[0].ParaGraph}
          link={data[0].link}
        />
      </div>


      <HomeServicesBox />

      <div className="flex justify-between flex-col-reverse md:flex-row-reverse items-center mt-20">
        <ImageComponent image1={data[1].imageUrls.image1} image2={data[1].imageUrls.image2} right={true} />
        <ContentBox
          header={data[1].headLine}
          para={data[1].ParaGraph}
          link={data[1].link}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-0">
        <ImageComponent image1={data[2].imageUrls.image1} image2={data[2].imageUrls.image2} right={false} />
        <ContentBox
          header={data[2].headLine}
          para={data[2].ParaGraph}
          link={data[2].link}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse items-center mb-20">
        <ImageComponent image1={data[3].imageUrls.image1} image2={data[3].imageUrls.image2} right={true} />
        <ContentBox
          header={data[3].headLine}
          para={data[3].ParaGraph}
          link={data[3].link}
        />
      </div>

      <VideoBackgroundComponent />
      <FullContactForm />

      {/* <MoveToTop /> */}

      {/* <Footer /> */}

      <ObjReact objReact={{
        path: "/aboutus",
        component: [{
          component: "MoveToTop",
          children: null
        },
        {
          component: "Footer",
          children: null
        },
        {
          component: "ContentBox",
          props: {
            header: "Data.3.headLine",
            para: data[3].ParaGraph,
            link: data[3].link
          },
          children: null
        }
        ],
        data: { data },
        compoLib: {
          "MoveToTop": MoveToTop,
          "Footer": Footer,
          "ContentBox": ContentBox
        }
      }} />
    </>

  );
}