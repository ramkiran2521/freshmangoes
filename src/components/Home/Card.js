import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";
import CartContext from "../../store/CartContext";

const Card = (props) => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  let quantity = 0;
  const thisElement = cartContext.items.findIndex((ele) => {
    return ele.id === props.product._id;
  });

  if (thisElement >= 0) {
    quantity = cartContext.items[thisElement].quantity;
  }

  const [isDecBtnDisabled, setIsDecBtnDisabled] = useState(true);

  function isDisabledFun(co) {
    if (co <= 0) {
      setIsDecBtnDisabled(true);
    } else {
      setIsDecBtnDisabled(false);
    }
  }

  function prevent(e) {
    e.stopPropagation();
  }

  function removeFromCart() {
    cartContext.removeItem(props.product._id);
    isDisabledFun(quantity - 1);
  }

  function addToCart() {
    cartContext.addItem({
      id: props.product._id,
      imgurl: props.product.imageurl,
      pName: props.product.productname,
      ogPrice: props.product.originalprice,
      offPrice: props.product.offerprice,
      quantity: 1,
    });
    isDisabledFun(quantity + 1);
  }

  function navigateProduct() {
    navigate("/product", { state: { product: props.product } });
  }

  return (
    <div
      className={`each-card ${props.className}`}
      id={props.product._id}
      onClick={navigateProduct}
    >
      <div className="card-img">
        <img
          src={props.product.imageurl}
          alt="image of mangoes"
        ></img>
      </div>
      <div className="card-des">
        <h4 className="pro-name">{props.product.productname}</h4>
        <div className="cost">
          {props.product.offerprice !==
            props.product.originalprice && (
            <span className="original-cost">
              {`₹${props.product.originalprice}`}
            </span>
          )}
          <span className="offer-cost">
            {` ₹${props.product.offerprice}`}
          </span>
        </div>
        <span>{`₹${props.product.offerprice} / 3kg`}</span>
        <div
          className={`add-cart-btn ${quantity ? "item-added" : ""} `}
          onClick={prevent}
        >
          <button
            className="minus-btn"
            onClick={removeFromCart}
            disabled={isDecBtnDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <span className="hide-quantity">{quantity}</span>
          <button className="plus-btn" onClick={addToCart}>
            <span>Add to Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
