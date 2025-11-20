import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart ,  getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      {/* Cart Items */}
      <div className="cart-items">
        {/* Header Row */}
        <div className="cart-header">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {/* Cart Items */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p data-label="Title">{item.name}</p>
                  <p data-label="Price">${item.price}</p>
                  <p data-label="Quantity">{cartItems[item._id]}</p>
                  <p data-label="Total">${item.price * cartItems[item._id]}</p>
                  <p
                    className="cross"
                    data-label="Remove"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Bottom Section: Total + Promo */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0 ? 0:  getTotalCartAmount()+ 2}</b>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
