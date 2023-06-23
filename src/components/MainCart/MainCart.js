import { useContext } from "react";
import "./MainCart.css";
import CartContext from "../../store/CartContext";
import MainCartItem from "./MainCartItem";

const MainCart = () => {
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.items.length > 0;

  const addItmHandler = (item) => {
    cartContext.addItem({ ...item, quantity: 1 });
  };

  const rmItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  return (
    <div className="main-cart-cont">
      <h1>My Cart</h1>
      {!hasItems && (
        <div className="empty-cart">
          <h2>Your Cart Is Empty</h2>
          <a href="/">Continue browsing</a>
        </div>
      )}
      {hasItems && (
        <div className="main-cart-sec">
          <div className="d-m-cart">
            {cartContext.items.map((ele) => {
              return (
                <MainCartItem
                  key={ele.id}
                  item={ele}
                  id={ele.id}
                  onAdd={addItmHandler.bind(null, ele)}
                  onRemove={rmItemHandler.bind(null, ele.id)}
                />
              );
            })}
          </div>

          <div className="order-sum">
            <h2>Order Summary</h2>
            <div>
              <div>
                <span>MRP Total</span>
                <span>{cartContext.totalAmount}</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="checkout-total">
                <span>Total</span>
                <span>{cartContext.totalAmount}</span>
              </div>
            </div>
            <button>Checkout</button>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
              Secured Checkout
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCart;
