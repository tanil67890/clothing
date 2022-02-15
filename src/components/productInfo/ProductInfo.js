import React, { useEffect, useState } from 'react';
import "./productInfo.css"
import { connect } from "react-redux";
import { addToCart, updateSelectedSize } from '../../redux/shop/shop-actions';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { Link } from "react-router-dom";

function ProductInfo(props) {

   const filter = () => {
      const size = document.getElementById("selectedSize").value;
      //setSelectedSize(size);
      props.updateSelectedSize(props.currentProduct.id, size);
      console.log(props); 
   };

  // const filter = () => {
  //   const size = document.getElementById("selectedSize").value;
  //   props.updateSelectedSize(props.currentProduct.id, size);
  //   console.log(props);
  // }

  return (
    <div className="productInfo-container">
      <div className="productInfo">
        <div className="left-side">
          <img src={props.currentProduct.img} alt="" />
        </div>
        <div className="right-side">
          <h1 className="title">{props.currentProduct.brand}</h1>
          <p className="name">{props.currentProduct.name}</p>
          <h1 className="price">Rs. {props.currentProduct.price}</h1>
          <div className="select-size">
            <label htmlFor="selectedSize">Select Size</label>

            <select defaultValue={props.currentProduct.availableSizes[0]} name="sizes" id="selectedSize" onChange={filter}>
              {props.currentProduct.availableSizes.map((size, index) => {
                return (
                  <option key={index} id="selectSize" value={size}>
                    {size}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="return">
            <p style={{ fontWeight: "bold" }}>RETURN</p>
            <p>
              Easy 30 days return and exchange. Return Policies may vary based
              on products and promotions. For full details on our Returns
              Policies, please <a href="#">click here․</a>
            </p>
          </div>
          <div className="buttons">
            <Link style={{ textDecoration: "none" }} to={`/bag`}>
              <button
                onClick={() => {
                  props.addToCart(props.currentProduct.id );
                }}
                className="buyNow"
              >
                BUY NOW <FlashOnIcon style={{ margin: "0px 8px" }} />{" "}
              </button>
            </Link>
            <button
              onClick={() => {
                props.addToCart(props.currentProduct.id);
              }}
              className="addToCart"
            >
              ADD TO CART <ShoppingBagIcon style={{ margin: "0px 8px" }} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentProduct: state.shop.currentProduct,
    bag: state.shop.bag,
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (ID, size) => dispatch(addToCart(ID, size)),
    updateSelectedSize: (productID, size) => dispatch(updateSelectedSize(productID, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
