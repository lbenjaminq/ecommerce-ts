import { createContext, useReducer, useState } from "react";
import { CartReducer } from "../reducer/CartReducer";
import { CartContextType } from "../types/type";

const InitialState = {
  cartItems: [],
  dispatch: () => {},
};

export const CartContext = createContext<CartContextType>(InitialState);

export const CartProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [cartItems, dispatch] = useReducer(CartReducer, InitialState.cartItems);

  const value = {
    cartItems,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// CartItems and dispatch will be provided here to the components (children)
// CartItems= Is an array of products that are added to the cart
// dispatch = Is a function for to change the state of the reducer
