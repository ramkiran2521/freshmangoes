import { useContext, useState } from "react";
import "./Product.css";
import { useLocation } from "react-router-dom";
import CartContext from "../../store/CartContext";

const Product = () => {
  const { state } = useLocation();
  const cartContext = useContext(CartContext);

  let quantity = 0;
  const thisElement = cartContext.items.findIndex((ele) => {
    return ele.id === state.product._id;
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
    cartContext.removeItem(state.product._id);
    isDisabledFun(quantity - 1);
  }

  function addToCart() {
    cartContext.addItem({
      id: state.product._id,
      imgurl: state.product.imageurl,
      pName: state.product.productname,
      ogPrice: state.product.originalprice,
      offPrice: state.product.offerprice,
      quantity: 1,
    });
    isDisabledFun(quantity + 1);
  }

  return (
    <div className="product-cont">
      <div>
        <h3>
          <a href="/">Home</a> / {state.product.productname}
        </h3>
        <div className="pr-details">
          <div className="pr-img">
            <div>
              <img src={state.product.imageurl} />
            </div>
            <div
              className={`add-cart-btn ${
                quantity ? "item-added" : ""
              } `}
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
          <div className="pr-details-des">
            <h2>{state.product.productname}</h2>
            <div className="p-cost">
              {state.product.originalprice !==
                state.product.offerprice && (
                <span className="og-price">
                  ₹{state.product.originalprice}
                </span>
              )}
              <span className="off-price">
                {" "}
                ₹{state.product.offerprice}
              </span>
              <p>₹{state.product.offerprice} / 3kg</p>
            </div>
            <div className="pr-det-text">
              <h4>Product Details</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Maecenas massa erat, pharetra vitae mi eu,
                tincidunt imperdiet justo. Cras venenatis sit amet
                tellus vel condimentum. Etiam lacinia lectus velit, at
                pulvinar enim suscipit et.
              </p>
            </div>
            <a href="/">Shop More...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
