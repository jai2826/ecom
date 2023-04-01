import React from "react";
import Cards from "./Cards";

const Pages = ({data}) => {

  return (
    <div className="border-2 w-full h-full p-12">
      <div className="border-2 h-full">
        <div className=" flex flex-wrap justify-start w-[90%]  mx-auto">
          {data.data.map((item) => {
            return <Cards  key={item._id} data={item}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Pages;
