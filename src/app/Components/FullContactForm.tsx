import React from 'react';
import ContactForm from './ContactForm';
import ImageComponent from './ImageComponent';

const imageUrls = {
  image1: 'http://www.vithiitsolutions.com/images/4b12216502d3566707e37c109ec622c8.png',
  image2: 'http://www.vithiitsolutions.com/images/cd2dd0d095bb3ba0958482abbb3d4baa.png',
};

const FullContactForm = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly bg-blue-950'>
        <div>
            <ImageComponent image1={imageUrls.image1} image2={imageUrls.image2} />
        </div>
      <div className='flex-1 w-full p-4'>
        <ContactForm />
      </div>
    </div>
  );
};

export default FullContactForm;
