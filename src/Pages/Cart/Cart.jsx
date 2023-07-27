import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import ProductsData from "../Shop/ProductsData";
import { CartItem } from "./CartItem";
import { ShopContext } from "../../context/ShopContext";
const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const [totalAmount, totalItem] = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {ProductsData.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout mb-5">
          <p className="fs-3 text-center">
            Subtotal:<strong>${totalAmount}</strong>
          </p>
          <button className="btn btn-success" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button
            className="btn btn-primary ms-5"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
export default Cart;
