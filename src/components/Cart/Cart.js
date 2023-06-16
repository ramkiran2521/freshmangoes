import "./Cart.css";
import Modal from "../Modal/Modal";
import CartItem from "./CartItems";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cartContext.totalAmount;
  const hasItems = cartContext.items.length > 0;

  const addItmHandler = (item) => {
    cartContext.addItem({ ...item, quantity: 1 });
  };

  const rmItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const navigateCart = () => {
    navigate("/cart");
  };

  return (
    <Modal onClose={props.onClose}>
      <div className="cart">
        <div className="cart-heading">
          <button onClick={props.onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>
          <h2>Cart</h2>
        </div>
        <div className="cart-itmes">
          {!hasItems && <p>Your Cart is Empty</p>}
          
          {cartContext.items.map((ele) => {
            return (
              <CartItem
                key={ele.id}
                item={ele}
                id={ele.id}
                onAdd={addItmHandler.bind(null, ele)}
                onRemove={rmItemHandler.bind(null, ele.id)}
              />
            );
          })}
        </div>
        {hasItems && (
          <div>
            <div className="total">
              <h3>Total Amount</h3>
              <span>₹ {totalAmount}</span>
            </div>
            <div className="view-cart-btn">
              <button
                onClick={() => {
                  props.onClose();
                  navigateCart();
                }}
              >
                View Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
