import ContentBox from '../Components/HomeComponents/ContentBox';
import ImageComponent from '../Components/HomeComponents/ImageComponent';
import React from 'react';
import Hero from '../Components/HomeComponents/HeroSection';
import HomeServicesBox from '../Components/HomeComponents/HomeServicesBox';
import { Metadata } from 'next';
import FullContactForm from '../Components/HomeComponents/FullContactForm';
import { data } from '@/utilities/constant';
import Footer from '../Components/CommonComponents/Footer';
import Navbar from '../Components/CommonComponents/Navbar';
import ObjReact from '@/utilities/DynamicComponent';
import MoveToTop from '../Components/CommonComponents/MoveToUp';
import * as Components from '@/Components';
import { generateCompoLib, generateComponentList } from '@/utilities/methods';
import jsonData from '@/utilities/vithiApp.json'


export const metadata: Metadata = {
  title: 'Home',
  description: 'VITHI IT SOLUTIONS',
}

const props = {
  header: data[3].headLine,
  para: data[3].ParaGraph,
  link: data[3].link
};



export default function Home() {
  const coml = generateCompoLib(Components, jsonData[0].Components)
  const compList = generateComponentList(jsonData[0].Components)

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

      <Components.VideoBackgroundComponent />
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
          props: {},
          children: null
        },
        {
          component: "ContentBox",
          props: {
            ...props
          },
          children: null
        },
        {
          component: "VideoBackgroundComponent",
          children: null
        }
        ],
        data: { data },
        compoLib: {
          "MoveToTop": MoveToTop,
          "Footer": Footer,
          "ContentBox": ContentBox,
          "VideoBackgroundComponent": Components.VideoBackgroundComponent,
          // ...coml
        }
      }} />
    </>

  );
}