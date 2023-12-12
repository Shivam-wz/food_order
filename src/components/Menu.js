import React from "react";
import MenuItem from "./MenuItem";
import { useCart } from "./CartContext";

const Menu = ({ menuItems }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Menu;
