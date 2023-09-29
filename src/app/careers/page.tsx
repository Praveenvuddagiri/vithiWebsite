import React from "react";
import CareerBox from "../Components/CareerComponents/CareerBox";
import Navbar from "../Components/Navbar";
import TopBreadCrum from "../Components/TopBreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "VITHI IT SOLUTIONS",
};

const aboutUsTopData = {
    title: 'Were always looking for talented people.',
    image: 'https://www.vithiitsolutions.com/images/9fda3ccbc09fd6b1db76410e59c325d0.png',
    navigations: ['Careers']
  }

const page = () => {
  return (
    <div>
      <Navbar active="aboutus" />
      <div className='mt-24'>
        <TopBreadCrum title={aboutUsTopData.title} image={aboutUsTopData.image} navigations={aboutUsTopData.navigations}/>
      </div>
      <CareerBox />
    </div>
  );
};

export default page;
