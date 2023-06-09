import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, decreaseItem } from "../../features/cart/cartslice";
import { hide, show } from "../../features/cart/cartvisibility";
import { XCircleIcon, PlusCircleIcon, MinusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
// import {  } from "@hero";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const visibility = useSelector((state) => state.cartVisibility.value);
  const dispatch = useDispatch();
  // console.log(...cartItems.data)

  return (
    <div className={`${visibility}`}>
      <div className=" bg-sky-300 h-full w-[30%] min-w-[200px] fixed right-0 p-4">
        <div className="flex justify-between">
          <h3>MY CART</h3>
          <button
            onClick={() => {
              dispatch(hide());
            }}
          >
            <XCircleIcon className="h-9 w-9 text-black" />
          </button>
        </div>
        <div>
          {cartItems.data.map((item) => (
            <div key={item._id} className="flex p-2 m-2 bg-red-500">
              <div className="flex justify-evenly w-2/4 items-center">
                <div className="">{item.name}</div>
                <div className="">{item.price}</div>
                <div className="">{item.qty}</div>
              </div>
              <div className="w-2/4 flex justify-evenly px-4 ">
                <button
                  className="bg-sky-500 rounded-md px-1 py-[2px]"
                  onClick={() => {
                    dispatch(addItem(item));
                  }}
                >
                  <PlusCircleIcon className="h-6 w-6 text-black" />
                </button>
                <button
                  className="bg-sky-500 rounded-md px-1 py-[2px] "
                  onClick={() => {
                    dispatch(removeItem(item));
                  }}
                >
                  <TrashIcon className="h-6 w-6 text-black" />
                </button>
                <button
                  className="bg-sky-500 rounded-md px-1 py-[2px]"
                  onClick={() => {
                    dispatch(decreaseItem(item));
                  }}
                >
                  <MinusCircleIcon className="h-6 w-6 text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
