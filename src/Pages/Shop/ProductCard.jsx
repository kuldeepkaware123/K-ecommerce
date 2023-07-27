import "bootstrap-icons/font/bootstrap-icons.css";
import "./ProductCard.css";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[product.id];

  return (
    <div className="card product-card">
      <img
        src={product.image}
        className="card-img-top product-image "
        alt={product.name}
      />

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ${product.price}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary add-to-cart-btn"
            onClick={() => addToCart(product.id)}
          >
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
          <i className="bi bi-suit-heart heart-icon fs-3"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
