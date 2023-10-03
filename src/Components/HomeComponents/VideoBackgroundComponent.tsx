import React from 'react';

const VideoBackgroundComponent = ({videoUrl, title, content}: {videoUrl:string, title: string, content: string}) => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-t from-blue-900 via-blue-900 to-blue-400">
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        className="w-full h-full absolute inset-0 object-cover opacity-50"
      ></video>

      <div className="container mx-auto flex flex-col justify-end items-end h-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-12 top-7 md:left-56 md:top-36 transform md:-translate-y-1/2" width="150" height="150" viewBox="0 0 180.969 180.969">
          <path id="download" d="M73.87,11.9l-.72.522ZM50.3,13.37l-.747-.481ZM85.782,58.233l-.3.836Zm105.49-28.878a.888.888,0,0,1,.921.855l.3,8a.889.889,0,1,1-1.777.067l-.267-7.109-7.109.267a.89.89,0,0,1-.067-1.779ZM2.258.27c2.6,11.07,10.1,20.234,19.623,26.52S42.87,36.437,53.3,35.955l.082,1.777c-10.839.5-22.675-2.985-32.478-9.459S3.257,12.285,.527.679L2.256.271ZM53.3,35.954c10.425-.48,16.811-4.475,19.87-9.215a12.592,12.592,0,0,0-.015-14.323l1.441-1.044A14.366,14.366,0,0,1,74.659,27.7c-3.447,5.342-10.441,9.527-21.281,10.028L53.3,35.954ZM73.151,12.418c-5.425-7.484-16.482-7.278-22.1,1.434l-1.494-.963C55.8,3.2,68.375,2.8,74.59,11.373l-1.441,1.044Zm-22.1,1.434c-3.5,5.428-2.205,13.551,3.861,21.846,6.032,8.246,16.645,16.42,31.174,21.7l-.607,1.672c-14.8-5.379-25.729-13.745-32-22.322-6.238-8.526-8.016-17.505-3.921-23.858l1.495.963ZM86.087,57.4c39.968,14.522,83.083-4.6,104.567-27.758l1.3,1.209C170.13,54.376,126.3,73.9,85.479,59.069l.607-1.672Z" transform="translate(45.045 -0.563) rotate(45)" fill="#4bba68"></path>
        </svg>
        <div className="p-10 relative z-10">
          <h2 className="text-4xl md:text-7xl text-white font-bold mb-4">
            {title}
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-white text-sm md:text-xl mb-6">
             {content}
            </p>
            <button className="bg-green-500 hover:bg-green-400 text-white rounded-full py-2 px-6 text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackgroundComponent;
