import React, { useContext } from "react";

// Components
import CartContext from "../../context/cart/CartContext";

// CSS
import "./Product.css";

const Product = (props) => {
  // Context
  const cartCtx = useContext(CartContext);
  const { dispatch } = cartCtx;

  const { product } = props;
  const { id, img, name, price } = product;

  const onAddToCart = (product) => {
    console.log(product);

    const action = {
      type: "ADD_TO_CART",
      payload: product,
    };

    dispatch(action);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p>{price}</p>
        <div className="d-flex align-items-center button-container">
          <button
            className="btn btn-success w-100"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-danger w-100"
            onClick={() => props.onViewProductDetail(id)}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
