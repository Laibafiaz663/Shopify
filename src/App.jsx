import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home";
import { createContext } from "react";
import { useState } from "react";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Detailpage from "./components/Detailpage";
import Cart from "./components/Cart";

export const CartContext = createContext(); //create context
export const ToastContext = createContext(); //create context
function App() {
  const [cart, setCart] = useState([]); //state for cart
  const [toast, setToast] = useState(""); //state for toast
  return (
    <>
      {/* provide context */}
      <CartContext.Provider value={{ cart, setCart }}>
        <ToastContext.Provider value={{ toast, setToast }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Detailpage />} />
          </Routes>
        </ToastContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
