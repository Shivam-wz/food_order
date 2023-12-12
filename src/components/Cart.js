import React, { useState } from "react";
import { useCart } from "./CartContext";

function Cart() {
  const { cart, removeFromCart, totalCartValue } = useCart();
  const [removalQuantity, setRemovalQuantity] = useState(1);

  const handleRemove = (item) => {
    removeFromCart(item, removalQuantity);
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        <label>Remove Quantity:</label>
        <input
          type="number"
          value={removalQuantity}
          onChange={(e) => setRemovalQuantity(e.target.value)}
        />
      </div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price} x{item.quantity}
          </p>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
      <p>Total Cart Value: ${totalCartValue}</p>
    </div>
  );
}

export default Cart;
