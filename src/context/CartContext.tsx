import { createContext, useContext, useState } from "react";
import Products from "./../data/items.json";

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
  getAmount: () => {
    total: number;
    subTotal: number;
    shipping: number;
    tax: number;
  };
  getTotalQuantity: () => number;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  reomveItem: (id: number) => void;
  cartItems: CartItem[];
  cartOpened: boolean;
  setCartOpened: (b: boolean) => void;
};

const CartContext = (props: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [cartOpened, setCartOpened] = useState(false);

  // const [detailOpened, setDetailOpened] = useState(false)

  const getAmount = () => {
    if (cartItems.length === 0) {
      return { total: 0, subTotal: 0, shipping: 0, tax: 0 };
    }
    const subTotal = cartItems.reduce(
      (total, curItem) =>
        total + (Products.find((p) => p.id === curItem.id)?.price || 0),
      0
    );
    const shipping = 10.0;
    const tax = 11.4;

    const total = subTotal + shipping + tax;

    return { total, subTotal, shipping, tax };
  };

  const getTotalQuantity = () => {
    return cartItems.length;
    // return cartItems.reduce((total, cur) => total + cur.quantity, 0);
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems((prevItem) => {
      if (prevItem.find((item) => item.id === id) == null) {
        return [...prevItem, { id, quantity: 1 }];
      } else {
        return prevItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseItemQuantity = (id: number) => {
    setCartItems((prevItem) => {
      if (prevItem.find((item) => item.id === id)?.quantity === 1) {
        return prevItem.filter((item) => item.id !== id);
      } else {
        return prevItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const reomveItem = (id: number) => {
    setCartItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  return (
    <Context.Provider
      value={{
        getAmount,
        getTotalQuantity,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        reomveItem,
        cartItems,
        cartOpened,
        setCartOpened,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CartContext;

export const useCartContext = () => useContext(Context);
