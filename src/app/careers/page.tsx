import React from "react";
import CareerBox from "../../Components/CareerComponents/CareerBox";
import Navbar from "@/Components/CommonComponents/Navbar";
import TopBreadCrum from "@/Components/CommonComponents/TopBreadCrum";
import { Metadata } from "next";
import JobsSection from "@/Components/CareerComponents/JobsSection";
import Footer from "@/Components/CommonComponents/Footer";
import CareerContactForm from "@/Components/CareerComponents/CareerContactForm";
import CareerAboutBox from "@/Components/CareerComponents/CareerAboutBox";
import { careersdata, jobs } from "@/utilities/constant";

export const metadata: Metadata = {
  title: "Careers",
  description: "VITHI IT SOLUTIONS",
};

const aboutUsTopData = {
  title: 'Were always looking for talented people.',
  image: 'https://www.vithiitsolutions.com/images/9fda3ccbc09fd6b1db76410e59c325d0.png',
  navigations: ['Careers']
}
const CareerContactFormData ={
  title:"Submit Your Resume",
  description:"If you want to be part of our existing team, kindly fill in the form below and we will reach out to you as soon as possible.",
  imageSrc:"http://www.vithiitsolutions.com/images/portrait-business-executive-us.jpg"
}

const page = () => {
  return (
    <div>
      <Navbar active="careers" />
      <div className='mt-24'>
        <TopBreadCrum title={aboutUsTopData.title} image={aboutUsTopData.image} navigations={aboutUsTopData.navigations} />
      </div>
      <CareerAboutBox />
      <CareerBox bgimage="https://www.vithiitsolutions.com/images/9fda3ccbc09fd6b1db76410e59c325d0.png" careersData={careersdata}/>

      <JobsSection jobPosts={jobs}/>

      <CareerContactForm title={CareerContactFormData.title} description ={CareerContactFormData.description} imgSrc ={CareerContactFormData.imageSrc} />
      <Footer />

    </div>
  );
};

export default page;
