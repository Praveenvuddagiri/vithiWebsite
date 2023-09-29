'use client';
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  return (
    <div className="bg-blue-950 h-fit ">
      <div className=" flex justify-center flex-col p-14 gap-3 ">
        <div>
          <h1 className="text-blue-400 font-bold text-2xl">Get Started?</h1>
          <p className="text-gray-500">Fill the Form below and we will get back to you soon..</p>
        </div>
        <div className="flex flex-col gap-4 ">
          <input type="text" placeholder="Full Name" className="p-2 focus:outline-none" />
          <div className="flex gap-4">
            <input type="text"  placeholder="Email" className="p-2 w-full focus:outline-none"/>
            <input type="text" placeholder="Phone Number" className=" p-2 w-full focus:outline-none"/>
          </div>
        </div>
        <textarea
        id="message"
        name="message"
        rows={4}
        className="custom-textarea w-full px-3 py-2 focus:outline-none"
        placeholder="Message"
        ></textarea>

        <div className="mb-4">
            <ReCAPTCHA
            sitekey="6LeNXVAoAAAAAErd-csU4ipa0-DoKXXuR1D_tbjr"
            size="normal" // Choose the size: "normal", "compact", or "invisible"
        />
        </div>
        <button className="p-3 bg-green-500 w-24 rounded-full text-white">SUBMIT</button>
      </div>
    </div>
  );
};

export default ContactForm;