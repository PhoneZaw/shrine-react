import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

type Props = {
  id: number;
};

const Nav = ({ id }: Props) => {
  const { getItemQuantity, increaseItemQuantity } = useCartContext();

  const qunatity = getItemQuantity(id);
  return (
    <div className="sticky top-0  flex justify-between items-center py-4 text-black">
      <Link to="/" className="text-2xl">
        <XIcon className="h-6 w-6" />
      </Link>
      <div className="flex gap-4">
        <button onClick={() => increaseItemQuantity(id)} className="relative">
          {qunatity > 0 && (
            <div className="absolute -right-2 -top-2 w-4 h-4 text-center bg-secondary-dark rounded-full text-secondary text-xs font-normal">
              {qunatity}
            </div>
          )}
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
        <button>
          <HeartIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
