import React from "react";
import Cards from "./Cards";

const Pages = ({ data }) => {
  return (
    <div className="border-2 w-full h-full p-12">
      <div className="border-2 h-full">
         <div className=" flex flex-wrap justify-start w-[90%]  mx-auto">
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         <Cards/>
         </div>
      </div>
    </div>
  );
};

export default Pages;
