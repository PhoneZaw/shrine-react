import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Products from "./../data/items.json";

type Props = {};

const Cart = (props: Props) => {
  const { cartItems } = useCartContext();
  return (
    <div className="h-20 px-4 py-4 bg-primary-dark flex items-center justify-center gap-4 relative border-none">
      <div className="absolute left-0 top-0 border-x-8 border-x-transparent w-0 h-0 border-t-[25px] border-r-[25px] border-t-black border-r-transparent border-b-0 border-l-0 overflow-x-auto" />
      <Link className="sticky z-10" to="/CartDetail">
        <ShoppingCartIcon className="h-6 w-6 mx-2" />
      </Link>
      {cartItems.map((item) => (
        <CartSmallItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;

type CartSmallItemProps = {
  id: number;
  quantity: number;
};

const CartSmallItem = ({ id, quantity }: CartSmallItemProps) => {
  const product = Products.find((item) => item.id === id);
  return (
    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-white relative overflow-hidden">
      <img
        className="w-full h-full scale-150 object-contain"
        src={product?.imgUrl}
        alt=""
      />
      <div className="absolute right-0 -top-1 text-secondary-dark font-bold">
        {quantity > 1 && "x" + quantity}
      </div>
    </div>
  );
};
