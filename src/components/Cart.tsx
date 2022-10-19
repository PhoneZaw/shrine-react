import { ShoppingCartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

type Props = {};

const Cart = (props: Props) => {
  const { cartItems } = useCartContext();
  return (
    <div className="px-4 py-4 bg-primary-dark flex items-center justify-center gap-4 relative border-none">
      <div className="absolute left-0 top-0 border-x-8 border-x-transparent w-0 h-0 border-t-[25px] border-r-[25px] border-t-black border-r-transparent border-b-0 border-l-0" />
      <Link to="/CartDetail">
        <ShoppingCartIcon className="h-6 w-6 mx-2" />
      </Link>
      {cartItems.map(({ id, quantity }) => (
        <div key={id} className="h-10 w-10 rounded-lg bg-white relative">
          <div className="absolute right-0 text-secondary-dark">
            {quantity > 1 && "x" + quantity}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
