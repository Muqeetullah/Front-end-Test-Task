import React, {useContext} from "react";
import {CartContext} from "./context/cartcontext";

function Cart() {
  const {cartItems, removeFromCart, getTotalCost} = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart Detail</h2>
      <h6>NAME --- PRICE --- QUANTITY</h6>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span> - </span>
            <span>Rs {item.price}</span>
            <span> - </span>
            <span>{item.count}</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Cost: RS {getTotalCost()}</h3>
    </div>
  );
}

export default Cart;
