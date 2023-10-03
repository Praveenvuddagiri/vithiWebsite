import React from 'react';

const data = {
  heading: "Accelerating Innovation. Empowering People.",
  para: [
    "We sincerely welcome you to be part of our culture of technology and performance. Vithi IT Solution practices agile development that requires enthusiasm and passion to integrate opportunities rather than focusing on limitations. We welcome anyone who knows technology, regardless of age or experience. The ideal candidate is self-motivated, open-minded, always striving to improve, and not shying away from supporting their peers.",
    "Please send your resume to careers@vithiitsolutions.com",
  ],
};

const CareerAboutBox = () => {
  return (
    <div className='p-8'>
      <div className='text-[36px] leading-[36px] text-[#000000] text-center w-[100%] font-bold mb-[30px] capitalize mt-0'>
        <h2>{data.heading}</h2>
      </div>
      <div className='text-[#697c86] text-[14px] leading-[26px] w-[100%] text-center font-[400] mb-0 '>
        {data.para.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default CareerAboutBox;
