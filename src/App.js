import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Home />
            </>
          }
        />
        <Route path="/shop" element={<h1>Shop</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/*" element={<h1>Route Not Found</h1>} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
