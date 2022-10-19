import { createContext, useContext, useState } from "react";
type Props = {
  children: JSX.Element;
};
const Context = createContext({} as CartContextType);

type CartItem = {
  id: number;
  quantity: number;
};

type Product = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type CartContextType = {
  getTotalQuantity: () => number;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  reomveItem: (id: number) => void;
  cartItems: CartItem[];
};

const dummyData = [
  {
    id: 1,
    quantity: 1,
  },
  {
    id: 2,
    quantity: 4,
  },
] as CartItem[];

const CartContext = (props: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(dummyData);

  const getTotalQuantity = () => {
    return cartItems.length;
    // return cartItems.reduce((total, cur) => total + cur.quantity, 0);
  };

  const getItemQuantity = (id: number) => {
    if (cartItems.find((item) => item.id === id)) {
      // setCartItems((item) => )
    }
    return cartItems.find((item) => item.id === id)?.id || 0;
  };

  const increaseItemQuantity = (id: number) => {};
  const decreaseItemQuantity = (id: number) => {};
  const reomveItem = (id: number) => {};

  return (
    <Context.Provider
      value={{
        getTotalQuantity,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        reomveItem,
        cartItems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CartContext;

export const useCartContext = () => useContext(Context);
