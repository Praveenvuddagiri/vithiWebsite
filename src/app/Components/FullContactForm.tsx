import React from "react";
import ContactForm from "./ContactForm";

const imageUrls = {
  image1: "http://www.vithiitsolutions.com/images/f1.png",
};

const FullContactForm = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-start bg-blue-950">
      <div className="p-4 md:w-1/2">
        <ContactForm />
      </div>
      <div className="md:w-1/2">
        <img
          src={imageUrls.image1}
          alt="Image 2"
          className="w-[65%] h-auto hidden md:block"
        />
      </div>
    </div>
  );
};

export default FullContactForm;
