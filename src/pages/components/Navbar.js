import Link from 'next/link';
import React from 'react'
import Cart from './Cart'
import { hide, show, change } from "../../features/cart/cartvisibility";
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex w-[100%] sticky top-0 backdrop-blur backdrop-filter bg-sky-500 bg-opacity-95 ">
        <div className="w-24  border-black border-2">Image</div>
        <div className="flex justify-start w-full ">
          <ul className="flex m-4 justify-evenly w-[60%] text-white font-semibold">
            <Link href={"/"} className="px-6 py-2 hover:bg-white hover:text-black bg-black rounded-md ">
              Home
            </Link>
            <Link href={"/products"} className="px-6 py-2 hover:bg-white hover:text-black bg-black rounded-md ">
              Tablets
            </Link>
            <Link href={"/products"} className="px-6 py-2 hover:bg-white hover:text-black bg-black rounded-md ">
              Mobile
            </Link>
            <Link href={"/products"} className="px-6 py-2 hover:bg-white hover:text-black bg-black rounded-md ">
              Laptops
            </Link>
            <Link href={"/products"} className="px-6 py-2 hover:bg-white hover:text-black bg-black rounded-md ">
              Custom PC
            </Link>
            <button
              onClick={() => {
                dispatch(change());
              }}
              className="px-6 py-2 hover:bg-white hover:text-black bg-black rounded-md "
            >
              Cart
            </button>
          </ul>
        </div>
      </div>
      <Cart />
    </>
  );
}

export default Navbar