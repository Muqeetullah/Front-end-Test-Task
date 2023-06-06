import React from "react";
import ProductList from "./components/productlist";
import {CartProvider} from "./context/cartcontext";
import Cart from "./cart";
function App() {
  return (
    <CartProvider>
      <div className="App">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
