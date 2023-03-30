import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { createDispatchHook, useDispatch } from 'react-redux';
import { addItem, removeItem } from "../../features/cart/cartslice";
import image from './../../../public/asusroglaptop1.jpg'

const Cards = () => {
  
  const testdata ={
    name:"Asus ROG xtreme",
    id:"1001",
    price:52600,
    category:"Laptop",
    subcategory:"Gaming",
    quantity:1 //Always start it with 1
  }
  const dispatch = useDispatch();
  
  
  return (
    <Link href={"#"}>
      <div className=" flex flex-col h-80 w-60 m-4 border-2 justify-evenly rounded-md">
        <div className="border m-2 p-2 flex-grow">
          <img className="object-cover object-center w-full " src="/asusroglaptop1.jpg" alt="Random Image" />
        </div>
        <div className="border m-2 p-2 rounded-md">
          <h4>{testdata.name}</h4>
          <div className="flex justify-between">
            <span>Price</span>
            <span>₹{testdata.price}</span>
          </div>
          <div className="flex justify-evenly">
            <button className="bg-sky-500 rounded-md px-1 py-[2px]">View More</button>
            <button
              className="bg-sky-500 rounded-md px-1 py-[2px]"
              onClick={() => {
                dispatch(addItem(testdata));
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards