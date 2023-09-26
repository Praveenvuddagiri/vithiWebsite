import React from 'react';
import ContactForm from './ContactForm';
import ImageComponent from './ImageComponent';

const imageUrls = {
  image1: 'http://www.vithiitsolutions.com/images/4b12216502d3566707e37c109ec622c8.png',
  image2: 'http://www.vithiitsolutions.com/images/cd2dd0d095bb3ba0958482abbb3d4baa.png',
};

const FullContactForm = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly bg-blue-950'>
      <div>
        <ImageComponent image1={imageUrls.image1} image2={imageUrls.image2} right={false}/>
      </div>
      <div className='p-4'>
        <ContactForm />
      </div>
    </div>
  );
};

export default FullContactForm;

