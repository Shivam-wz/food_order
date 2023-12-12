import React from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

const menuItems = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 15 },
  { id: 3, name: "Item 3", price: 12 },
  { id: 4, name: "Item 4", price: 8 },
];

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Food Ordering App</h1>
        <Menu menuItems={menuItems} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
