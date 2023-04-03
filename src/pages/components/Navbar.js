import Link from "next/link";
import React from "react";
import Cart from "./Cart";
import { useRouter } from "next/router";
import { hide, show, change } from "../../features/cart/cartvisibility";
import { disableButton } from "../../features/user/isActive";
import { reload } from "../../features/reloadKey";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const SignInV = useSelector((state) => state.isActive.signIn);
  const SignOutV = useSelector((state) => state.isActive.signOut);
  const reloadKey = useSelector((state) => state.reloadKey.key);
 
  
  const signOut = () => {
    dispatch(reload());
    localStorage.removeItem("isActive");
    router.replace("/");
  };
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
            <Link href={"/signin"} className={`${SignInV} px-6 py-2 hover:bg-white hover:text-black bg-black rounded-md `}>
              SignIn
            </Link>
            <button onClick={signOut} className={`${SignOutV} px-6 py-2 hover:bg-white hover:text-black bg-black rounded-md `}>
              SignOut
            </button>
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
};

export default Navbar;
