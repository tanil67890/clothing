import React from 'react';
import "./product.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadCurrentProduct } from "../../redux/shop/shop-actions"

function Product(props) {
  //console.log(props);
  return (
    <Link style={{ textDecoration: "none" }} to={`/product/${props.product.id}`}>
      <div
        onClick={() => props.loadCurrentProduct(props.product)}
        className="product"
      >
        <img src={props.product.img} alt="" />
        <h4>{props.product.brand}</h4>
        <p style={{ color: "black" }}>{props.product.name}</p>
        <div style={{ color: "black" }} className="product-price">
          Rs. {props.product.price}
        </div>
        <small style={{ color: "black" }}>
          Offer Price:{" "}
          <div className="offer-price">{props.product.offerPrice}</div>
        </small>
      </div>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    currentProduct: state.shop.currentProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentProduct: (item) => dispatch(loadCurrentProduct(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
