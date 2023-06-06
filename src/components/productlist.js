import React, {useContext} from "react";
import {CartContext} from "../context/cartcontext";

const products = [
  {
    id: 1,
    name: "Samsung",
    price: 120000,
    image: "/iphone.png",
  },
  {id: 2, name: "IPhone", price: 180000, image: "/pixel.png"},
  {
    id: 3,
    name: "Nokia",
    price: 90000,
    image: "/samsung.jpg",
  },
];
// i am considering hard coding data for now

function ProductList() {
  const {addToCart} = useContext(CartContext);

  return (
    <div className="product-list">
      <h1>Your Shopping Cart</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={120}
            />
            <span>
              <span className="product-name">{product.name}</span>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <span> - </span>
              <span className="product-price">RS {product.price}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
