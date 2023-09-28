import React from "react";

const TabView = ({ tabs, currentTab,setCurrentTab }: any) => {
  return (
    <div className="flex gap-5 bg-[#f2f2f2] font-[600] text-[18px] capitalize text-[#444444] items-center justify-between cursor-pointer  leading-[1.6] w-[80%]">
      {tabs?.map((tab:string)=> {
        return ( 
            <div className={`pt-[20px] pb-[20px] pr-[40px] pl-[40px] ${currentTab===tab?'bg-[#1e85bd] text-[#fff]':'text-black'}`}
                onClick={()=>setCurrentTab(tab)}
            >
                {tab}
            </div>
      )})}
    </div>
  );
};

export default TabView;
