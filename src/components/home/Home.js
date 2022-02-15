import React from 'react';
import "./home.css"
import { connect } from "react-redux";
import Card from './card/Card';
import CategoriesCard from './categoriesCard/CategoriesCard';
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Home(props) {
  return (
    <div className="home-container">
      <div className="home">
        <div className="wrap">
          <Link style={{ textDecoration: "none"}} to={`/shop`}>
            <button className='explore'>EXPLORE OUR COLLECTION <ArrowCircleRightIcon style={{fontSize: "50px"}} /></button>
          </Link>

        </div>
        <div className="wrap">
          <h1 className="title">BIGGEST DEALS ON TOP BRANDS</h1>
          <div className="cards">
            {props.topBrands.map((topBrand) => {
              return <Card key={topBrand.id} topBrand={topBrand} />;
            })}
          </div>
        </div>

        <div className="wrap">
          <h1 className="title">CATEGORIES TO BAG</h1>
          <div className="cards-1">
            {props.categories.map((category) => {
              return <CategoriesCard key={category.id} category={category} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    topBrands: state.shop.topBrands,
    categories: state.shop.categories,
  };
};

export default connect(mapStateToProps)(Home);
