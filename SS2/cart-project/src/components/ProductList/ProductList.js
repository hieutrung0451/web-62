import React from "react";

import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = ({ products, onViewProductDetail }) => {
  return (
    <div className="d-flex align-items-center justify-content-center product-list">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            onViewProductDetail={onViewProductDetail}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
