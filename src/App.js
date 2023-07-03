import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import CartProvider from "./store/CartProvider";
import Loading from "./components/Loading/Loading";
import MainCart from "./components/MainCart/MainCart";
import Contact from "./components/Contact/Contact";
import ShopAll from "./components/ShopAll/ShopAll";

function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const productsFetch = useCallback(() => {
    axios
      .get("https://freshmangoes-api.vercel.app/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    productsFetch();
  }, []);

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <CartProvider>
          {showCart && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/shop"
              element={<ShopAll products={products} />}
            />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<MainCart />} />
            <Route path="/product/*" element={<Product />} />
            <Route path="/*" element={<h1>Page not found</h1>} />
          </Routes>
          <Footer />
        </CartProvider>
      )}
    </>
  );
}

export default App;
