import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createDispatchHook, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartslice";
import image from "./../../../public/asusroglaptop1.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ data }) => {
  const dispatch = useDispatch();
  const notify = ()=>{
    toast.success("Item added in Cart");
  }
  return (
    <div className=" flex flex-col h-80 w-60 m-4 border-2 justify-evenly rounded-md">
      <Link href={"#"}>
        <div className="border m-2 p-2 flex-grow">
          <img className="object-cover object-center w-full " src="/asusroglaptop1.jpg" alt="Random Image" />
        </div>
      </Link>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <div className="border m-2 p-2 rounded-md">
        <h4>{data.name}</h4>
        <div className="flex justify-between">
          <span>Price</span>
          <span>₹{data.price}</span>
        </div>
        <div className="flex justify-evenly">
          <button className="bg-sky-500 rounded-md px-1 py-[2px]">View More</button>
          <button
            className="bg-sky-500 rounded-md px-1 py-[2px]"
            onClick={() => {
              dispatch(addItem(data));
              notify();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
