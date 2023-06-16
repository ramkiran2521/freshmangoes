import { useState } from "react";
import "./Product.css";
import { useLocation } from "react-router-dom";

const Product = (props) => {
  const state = useLocation();
  const [counter, setCounter] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);

  function isDisabledFun(co) {
    if (co < 2) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  function decrimentCounter() {
    setCounter((prev) => {
      isDisabledFun(prev - 1);
      return prev - 1;
    });
  }

  function incrementCounter() {
    setCounter((prev) => {
      isDisabledFun(prev + 1);
      return prev + 1;
    });
  }

  function addToCart(e) {
    console.log(e.target.parentElement.innerText.split("\n"));
  }

  return (
    <div
      className={`each-card ${props.className}`}
      id={state.state.product._id}
    >
      <div className="card-img">
        <img
          src={state.state.product.imageurl}
          alt="image of mangoes"
        ></img>
      </div>
      <div className="card-des">
        <h4 className="pro-name">
          {state.state.product.productname}
        </h4>
        <div className="cost">
          <span id="original-cost">
            ₹{state.state.product.originalprice}
          </span>
          <span className="offer-cost">
            {" "}
            ₹{state.state.product.offerprice}
          </span>
        </div>
        <span>₹300 / 3kg</span>
        <div className="quantity">
          <button onClick={decrimentCounter} disabled={isDisabled}>
            -
          </button>
          <span>{counter}</span>
          <button onClick={incrementCounter}>+</button>
        </div>
        <button className="add-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
