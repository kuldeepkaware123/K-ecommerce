// ProductPage.js
import React from "react";
import ProductCard from "./ProductCard";
import ProductsData from "./ProductsData";

const ProductPage = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        {ProductsData.map((product) => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
