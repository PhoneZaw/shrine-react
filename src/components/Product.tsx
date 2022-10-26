import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Product = ({ id, name, price, imgUrl }: Props) => {
  const { increaseItemQuantity } = useCartContext();

  return (
    <div className="text-center text-sm flex-shrink-0 mx-5 my-4">
      <div className="bg-gray-400 h-44 w-48 relative">
        <img className="w-full h-full object-cover" src={imgUrl} alt={name} />
        <div className="absolute -bottom-3 left-[calc(50%-12px)] h-6 w-6 rounded-full bg-white z-10" />

        <button
          id="addBtn"
          className="absolute top-2 left-2 w-fit h-fit"
          onClick={() => increaseItemQuantity(id)}
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
      <Link to={`/ProductDetail?id=${id}`}>
        <h5 className="mt-4">{name}</h5>
      </Link>
      <p className="font-normal">${price}</p>
    </div>
  );
};

export default Product;
