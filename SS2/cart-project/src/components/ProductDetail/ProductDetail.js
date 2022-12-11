import React from "react";
import "./ProductDetail.css";

const ProductDetail = ({ selectedProduct }) => {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-4">
          <img className="card-img-top" src={selectedProduct?.img} alt="" />
        </div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <td colSpan="2">
                  <h3>Thông số kĩ thuật</h3>
                </td>
              </tr>
              <tr>
                <td>Màn hình</td>
                <td>{selectedProduct?.info.screen}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{selectedProduct?.info.os}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{selectedProduct?.info.frontCamera}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{selectedProduct?.info.backCamera}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>{selectedProduct?.ram}</td>
              </tr>
              <tr>
                <td>Rom</td>
                <td>{selectedProduct?.rom}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
