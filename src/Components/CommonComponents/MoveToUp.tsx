"use client"
import React from 'react';

const MoveToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4">
      <button onClick={scrollToTop}>
        <img
          src="https://www.vithiitsolutions.com/images/icon_top.png"
          alt="Move to Top"
          className="w-12 h-12 hover:bg-gray-100 text-white rounded-full p-2 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default MoveToTop;
