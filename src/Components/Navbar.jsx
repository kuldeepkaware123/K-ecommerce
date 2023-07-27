import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const [totalAmount, totalItem] = getTotalCartAmount();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          K-Ecommerce
        </a>
        <div className="navbar-icons">
          <span className="badge badge-pill badge-primary text-danger">
            {totalItem}
          </span>
          <Link to={"/cart"}>
            <i className="bi bi-cart"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
