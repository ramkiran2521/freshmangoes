import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
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

  function addToCart(e){
    console.log(e.target.parentElement.innerText.split('\n'));
  }

  return (
    <div className={`each-card ${props.className}`} id={props.id}>
      <div className="card-img">
        <img
          src="https://static.wixstatic.com/media/12b050_a7caa01c6cbf4a33a25be6300420a9f5~mv2.png/v1/fill/w_500,h_333,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b050_a7caa01c6cbf4a33a25be6300420a9f5~mv2.png"
          alt="image of mangoes"
        ></img>
      </div>
      <div className="card-des">
        <h4 className="pro-name">Sendura / Sendhuri / Rajgira</h4>
        <div className="cost">
          <span id="original-cost">₹500</span>
          <span className="offer-cost">  ₹300</span>
        </div>
        <span>₹300 /  3kg</span>
        <div className="quatity">
          <button onClick={decrimentCounter} disabled={isDisabled}>
            -
          </button>
          <span>{counter}</span>
          <button onClick={incrementCounter}>+</button>
        </div>
        <button className="add-cart-btn" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
