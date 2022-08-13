import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import CartList from "./Pages/CartList";
import Products from "./Pages/Products";
import { ProductContextProvider } from "./ProductContext";


function App() {
  return (
    <ProductContextProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
      <Footer />
    </div>
    </ProductContextProvider>
  );
}

export default App;
