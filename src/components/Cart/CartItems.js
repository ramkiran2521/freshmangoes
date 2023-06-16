import "./CartItems.css";

const CartItem = (props) => {
  return (
    <div className="cart-item" id={props.item.id}>
      <div className="cart-img">
        <img src={props.item.imgurl} alt="images of mangoes" />
      </div>
      <div className="p-details">
        <h4>{props.item.pName}</h4>
        <div className="cost">
          <span className="original-cost">₹{props.item.ogPrice}</span>
          <span className="offer-cost">
            {` ₹${props.item.offPrice}`}
          </span>
        </div>
        <div className="c-quantity">
          <button onClick={props.onRemove}>-</button>
          <span>{props.item.quantity}</span>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
