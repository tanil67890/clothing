import React from 'react';
import "./card.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { filterByBrand, refineByBrand } from "../../../redux/shop/shop-actions"

function Card(props) {
  //console.log(props);
  return (
       <Link style={{ textDecoration: "none" }} to={`/explore/${props.topBrand.value}`}>
        <div onClick={() => props.filterByBrand(props.topBrand.brandId)} className="card">
          <img src={props.topBrand.img} alt="" />
        </div>
      </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    exploreByBrand: state.shop.exploreByBrand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refineByBrand: (ID) => dispatch(refineByBrand(ID)),
    filterByBrand: (ID) => dispatch(filterByBrand(ID))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
