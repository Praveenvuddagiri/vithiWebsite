import React from "react";

const ImgComponent = ({ image1, image2, right }: { image1: string; image2: any, right:boolean }) => {
  return (
    <div>
      <div
        className={`relative sm:justify-center flex ${
          !right ? "justify-start" : "justify-end"
        }`}
        style={
          right
            ? { justifyContent: "flex-start" }
            : { justifyContent: "flex-end" }
        }
      >
        <img
          src={image1}
          alt="Image 1"
          className="w-[80%] h-auto object-cover  animate-jump-in animate-duration-[1500ms] animate-delay-300 animate-ease-in animate-normal"
        />

        <img
          src={image2}
          alt="Image 2"
          className={`absolute top-10 w-[80%] h-auto z-10 ${
            right ? "right-0" : "left-0"
          }}`}
        />
      </div>
    </div>
  );
};

export default ImgComponent;
