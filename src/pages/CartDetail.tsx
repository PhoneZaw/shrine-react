import { MinusCircleIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ColorBox } from "../components/ProductDetail";
import { useCartContext } from "../context/CartContext";
import items from "./../data/items.json";

type Props = {};

const CartDetail = (props: Props) => {
  const { getTotalQuantity, cartItems } = useCartContext();
  return (
    <div className="bg-primary-dark h-full text-secondary-dim relative">
      {/* Head */}
      <div className="flex px-3 py-4 gap-3 items-center ">
        <Link to="/">
          <ChevronDownIcon className="h-6 w-6" />
        </Link>
        <div className="">
          <h3 className="uppercase text-secondary">Cart</h3>
          <p className="font-normal text-sm">{getTotalQuantity()} items</p>
        </div>
      </div>
      <hr className="opacity-20 ml-13" />

      <ul>
        {cartItems?.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>

      {/* Total Section */}
      <div className="py-4 space-y-1 text-sm font-normal">
        <div className="flex justify-between items-center px-3 pl-12">
          <h5 className="uppercase">Total</h5>
          <h3 className="text-2xl font-medium">$999.40</h3>
        </div>
        <div className="flex justify-between px-3 pl-12">
          <h5>Subtotal</h5>
          <p>$115.00</p>
        </div>
        <div className="flex justify-between px-3 pl-12">
          <h5>Shipping</h5>
          <p>$10.00</p>
        </div>
        <div className="flex justify-between px-3 pl-12">
          <h5>Tax</h5>
          <p>$11.40</p>
        </div>
      </div>

      <button className="absolute bg-primary w-[calc(100%-32px)] rounded-2xl px-4 py-4 uppercase left-4 bottom-6 text-sm">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartDetail;

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const item = items.find((item) => item.id === id);
  useEffect(() => {}, []);

  if (!item) {
    return null;
  }
  return (
    <li className="px-3 py-4 flex items-center border-b border-b-white/20">
      <button>
        <MinusCircleIcon className="w-6 h-6" />
      </button>
      {/* <img src="" alt="" /> */}
      <div className="w-20 h-20 bg-gray-400 mx-3"></div>
      <div className="flex-1 flex h-24 ">
        <div className="flex-1 px-2 flex flex-col justify-between  h-full">
          <div className="text-sm">
            <h5 className="font-normal">Brand</h5>
            <h3 className="">{item.name}</h3>
          </div>
          <p className="opacity-60 text-sm py-2 border-t border-white/20">
            No Size
          </p>
        </div>
        <div className="flex-1 px-2 flex flex-col justify-between  ">
          <p className="font-normal text-end text-sm">${item.price}</p>
          {quantity > 1}
          <p className="font-normal text-end text-sm">
            <span className="text-sm font-semibold">x{quantity}</span> - $
            {Math.round(quantity * item.price)}
          </p>
          <div className="opacity-60 text-sm py-2 border-t border-white/20 flex justify-between items-center">
            <ColorBox color="pink" className="!h-5 !w-5" />
            <div className="w-0 h-0 border-t-[6px] border-x-[6px] border-x-transparent mr-2" />
          </div>
        </div>
      </div>
    </li>
  );
};
