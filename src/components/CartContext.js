import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const numQuantity = Number(quantity);

    if (numQuantity > 0) {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        setCart((prevCart) => {
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + numQuantity }
              : cartItem
          );
        });
      } else {
        setCart((prevCart) => [
          ...prevCart,
          { ...item, quantity: numQuantity },
        ]);
      }
    }
  };

  const removeFromCart = (item, removalQuantity) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].quantity <= removalQuantity) {
        updatedCart.splice(existingItemIndex, 1);
      } else {
        updatedCart[existingItemIndex].quantity -= removalQuantity;
      }
      setCart(updatedCart);
    }
  };

  const totalCartValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalCartValue }}
    >
      {children}
    </CartContext.Provider>
  );
};
