import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product-list">
      <div className="prdct-detail">
        <Link className="link" to="/product-details">
          <div className="prdct-img"> {product.image} </div>
          <p>manolo</p>
          <h2>{product.name}</h2>
          <p>mens shoes</p>
        </Link>
        <div className="price-and-addtocart">
          <p> ${product.price}</p>
          <Link className="link" to="/checkout"><img className="prdct-detail-img" src="./Group.svg" alt="Cart" /></Link>

        </div>
      </div>

    </div>
  );
};

export default Product;