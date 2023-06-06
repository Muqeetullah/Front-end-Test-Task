import React, {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return {...cartItem, count: cartItem.count + 1};
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, {...item, count: 1}]);
    }
  };

  const removeFromCart = item => {
    const updatedCartItems = cartItems
      .map(cartItem => {
        if (cartItem.id === item.id) {
          if (cartItem.count > 1) {
            return {...cartItem, count: cartItem.count - 1};
          } else {
            return null;
          }
        }
        return cartItem;
      })
      .filter(cartItem => cartItem !== null);
    setCartItems(updatedCartItems);
  };

  const getTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, getTotalCost}}
    >
      {children}
    </CartContext.Provider>
  );
}
