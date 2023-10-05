import React from "react";
import ContactForm from "./ContactForm";


const FullContactForm = ({image}:{image:string}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-start bg-blue-950">
      <div className="md:w-1/2">
        <ContactForm />
      </div>
      <div className="md:w-1/2">
        <img
          src={image}
          alt="Image 2"
          className="w-[65%] h-auto hidden md:block"
        />
      </div>
    </div>
  );
};

export default FullContactForm;
