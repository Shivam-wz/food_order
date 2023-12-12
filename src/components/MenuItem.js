import React, { useState } from "react";
import { useCart } from "./CartContext";

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  return (
    <div>
      <p>
        {item.name} - ${item.price}
      </p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
