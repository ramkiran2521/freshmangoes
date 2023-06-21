import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";
import CartContext from "../../store/CartContext";

const Card = (props) => {
  const cartContext = useContext(CartContext);
  // console.log(cartContext)

  const [quantity, setQuantity] = useState(1);
  const [isDecBtnDisabled, setIsDecBtnDisabled] = useState(true);

  const navigate = useNavigate();

  function isDisabledFun(co) {
    if (co < 2) {
      setIsDecBtnDisabled(true);
    } else {
      setIsDecBtnDisabled(false);
    }
  }

  function decrimentQuantity(e) {
    setQuantity((prev) => {
      isDisabledFun(prev - 1);
      return prev - 1;
    });
  }

  function incrementQuantity(e) {
    setQuantity((prev) => {
      isDisabledFun(prev + 1);
      return prev + 1;
    });
  }

  function prevent(e) {
    e.stopPropagation();
  }

  function addToCart(e) {
    e.stopPropagation();

    cartContext.addItem({
      id: props.product._id,
      imgurl: props.product.imageurl,
      pName: props.product.productname,
      ogPrice: props.product.originalprice,
      offPrice: props.product.offerprice,
      quantity: quantity,
    });

    setQuantity(1);
    setIsDecBtnDisabled(true);
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
          {props.product.offerprice !== props.product.originalprice && (
            <span className="original-cost">
              {`₹${props.product.originalprice}`}
            </span>
          )}
          <span className="offer-cost">
            {` ₹${props.product.offerprice}`}
          </span>
        </div>
        <span>₹300 / 3kg</span>
        <div className="quantity" onClick={prevent}>
          <button
            onClick={decrimentQuantity}
            disabled={isDecBtnDisabled}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button className="add-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
