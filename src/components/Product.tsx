import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useState } from "react";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Product = ({ id, name, price, imgUrl }: Props) => {
  const addBtnHandler = () => {};

  return (
    <div className="text-center text-sm flex-shrink-0 mx-5">
      <div className="bg-gray-400 h-44 w-48 relative">
        {/* <img src="" alt="" /> */}
        <div className="absolute -bottom-3 left-[calc(50%-12px)] h-6 w-6 rounded-full bg-white z-10"></div>

        <button
          id="addBtn"
          className="absolute top-2 left-2 w-fit h-fit"
          onClick={addBtnHandler}
        >
          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-black" />
            <span className="absolute -top-2 left-2 text-lg">+</span>
            {/* Cart Count */}
            {/* <span className="px-1 rounded-full bg-secondary-dark relative bottom-10 left-2 text-xs">
            1
          </span> */}
          </div>
        </button>
      </div>
      <h5 className="mt-4">{name}</h5>
      <p className="font-normal">${price}</p>
    </div>
  );
};

export default Product;