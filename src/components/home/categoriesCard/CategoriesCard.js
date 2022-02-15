import React from 'react';
import "./categoriesCard.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterByCategory } from "../../../redux/shop/shop-actions"

function CategoriesCard(props) {
  //console.log(props)
  return (
    <Link style={{ textDecoration: "none" }} to={`/explore/${props.category.value}`}>
      <div onClick={() => props.filterByCategory(props.category.id)} className="card-1">
        <img src={props.category.img} alt="" />
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterByCategory: (ID) => dispatch(filterByCategory(ID)),
  };
};


export default connect(null, mapDispatchToProps)(CategoriesCard);
