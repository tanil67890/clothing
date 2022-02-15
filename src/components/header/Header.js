import React, { useEffect, useState } from 'react';
import "./header.css"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchProducts } from "../../redux/shop/shop-actions"
import Badge from "@mui/material/Badge";

function Header(props) {
  let [bagCount, setBagCount] = useState(0);
  useEffect(() => {
    setBagCount(props.bag.length);
  }, [props.bag])
  
  return (
    <div className="header-container">
      <div className="left">
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <img
            src="https://raw.githubusercontent.com/ZhangMYihua/crwn-clothing/862e7aabd129636faff9155fcee51bad24a8c1fb/client/src/assets/crown.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="right">
        <div className="down">
          <a href="#">Sign In/Join Crown</a>
          <a href="#">Customer Care</a>
          <input type="text" placeholder="Search" onChange={(e) => props.searchProducts(e.target.value) }/>
          <div className="bag">
            <Link style={{ textDecoration: "none" }} to={`/bag`}>
              <Badge badgeContent={bagCount} color="success">
              <ShoppingBagIcon
                style={{
                  color: "rgba(44,65,82,255)",
                  fontSize: "40px",
                  textAlign: "center",
                }}
              />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bag: state.shop.bag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchProducts: (keyWord) => dispatch(searchProducts(keyWord)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
