import React from 'react'
import "./explore.css"
import { connect } from "react-redux";
import { refineByGender, refineByColor, refineByBrand, refineByCategory } from "../redux/shop/shop-actions"
import Filter from '../components/filter/Filter';
import Product from '../components/product/Product';

function Explore(props) {
  return (
    <div className="shop-home-container">
      <div className="home-body">
        <div className="home-left">
          <Filter genders={props.genders} brands={props.brands} colors={props.colors} categories={props.categories} />
        </div>

        <div className="home-right">
          {props.products.map((item) => {
            return <Product key={item.id} product={item} />;
          })}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    topBrands: state.shop.topBrands,
    brands: state.shop.brands,
    colors: state.shop.colors,
    genders: state.shop.genders,
    categories: state.shop.categories,
    currentProduct: state.shop.currentProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refineByGender: (ID) => dispatch(refineByGender(ID)),
    refineByBrand: (ID) => dispatch(refineByBrand(ID)),
    refineByColor: (ID) => dispatch(refineByColor(ID)),
    refineByCategory: (ID) => dispatch(refineByCategory(ID)),
    loadCurrentProduct: (item) => dispatch(item),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore)