import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="*" element={<h4>Page Not Found</h4>} />
      </Routes>
      <Footer />
    </>
  );
}
