import React from "react";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-fit flex flex-col p-4  sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex-grow">
      {children} 
    </div>
  );
};

export default Content;
