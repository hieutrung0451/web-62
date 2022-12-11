import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { AiFillDelete } from "react-icons/ai";

import "./CartPage.css";

const CartPage = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const cartBody =
    cart &&
    cart.map((cartItem, index) => {
      const { id, name, price, img, quantity } = cartItem;
      return (
        <tr>
          <th scope="row">{index}</th>
          <td>{name}</td>
          <td>
            <img
              src={img}
              alt={name}
              style={{ width: "36px", height: "100%" }}
            />
          </td>
          <td className="d-flex">
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "MINUS_QUANTITY", payload: id })}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "PLUS_QUANTITY", payload: id })}
            >
              +
            </button>
          </td>
          <td>{quantity * Number(price)}</td>
          <td>
            <button
              className="btn btn-danger rounded-circle"
              onClick={() =>
                dispatch({ type: "DELETE_CART_ITEM", payload: id })
              }
            >
              <AiFillDelete />
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div className="container">
      <h4 className="mb-4">
        <div className="cart-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>{cartBody}</tbody>
          </table>
        </div>
      </h4>
    </div>
  );
};

export default CartPage;
