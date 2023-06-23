import "./MainCartItem.css";

const MainCartItem = (props) => {
  return (
    <div className="m-cart-item">
      <div className="img-p-d">
        <div className="m-cart-img">
          <img src={props.item.imgurl} alt="images of mangoes" />
        </div>
        <div className="m-product-details">
          <h4>{props.item.pName}</h4>
          <div className="cost">
            {props.item.offPrice !== props.item.ogPrice && (
              <span className="original-cost">
                ₹{props.item.ogPrice}
              </span>
            )}
            <span className="offer-cost">
              {` ₹${props.item.offPrice}`}
            </span>
          </div>
          <span className="q-3">{`₹${props.item.offPrice} / 3kg`}</span>
        </div>
      </div>
      <div className="m-btn-sec">
        <span>₹{props.item.offPrice * props.item.quantity}</span>
        <div>
          <button onClick={props.onRemove}>
            <span>-</span>
          </button>
          <span>{props.item.quantity}</span>
          <button onClick={props.onAdd}>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCartItem;
