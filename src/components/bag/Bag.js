import React from 'react';
import "./bag.css"
import BagItem from './bagItem/BagItem';
import { connect } from "react-redux";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import VerifiedIcon from "@mui/icons-material/Verified";
import CachedIcon from "@mui/icons-material/Cached";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/shop/shop-actions"

function Bag(props) {
  return (
    <div>
      {props.bag.length > 0 ? (
        <div className="shoppingBagContainer">
          <div className="shoppingBag">
            <div className="shoppingBag-left">
              <p style={{ display: "inline-block", fontSize: "25PX" }}>
                My Bag
              </p>
              {props.bag.map((item, index) => {
                return <BagItem key={index} product={item} />;
              })}
            </div>
            <div className="shoppingBag-right">
              <div className="order-details">
                <div style={{ fontWeight: "bold" }}>ORDER DETAILS</div>
                <div className="order-details-breakdown">
                  {props.bag.map((item, index) => {
                    return (
                      <div key={index} className="flex">
                        <div className="flex-left">{item.name} x {item.selectedQuantity}</div>
                        <div
                          style={{ color: "green", fontWeight: "bold" }}
                          className="flex-right"
                        >
                          + Rs. {item.price*item.selectedQuantity}
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex">
                    <div className="flex-left">Bag Total</div>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "rgba(213,162,73,255)",
                      }}
                      className="flex-right"
                    >
                      {" "}
                      Rs. {props.bagTotal}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-left">Bag Discount</div>
                    <div
                      style={{ color: "red", fontWeight: "bold" }}
                      className="flex-right"
                    >
                      - Rs. {props.bagDiscount}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-left">Delivery</div>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "rgba(213,162,73,255)",
                      }}
                      className="flex-right"
                    >
                      FREE
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: "3px solid black",
                      borderBottom: "3px solid black",
                      padding: "10px 0px",
                    }}
                    className="flex"
                  >
                    <div
                      style={{ fontWeight: "bold", color: "black" }}
                      className="flex-left"
                    >
                      Total Amount
                    </div>
                    <div
                      style={{ fontWeight: "bold", color: "black" }}
                      className="flex-right"
                    >
                      Rs. {props.totalAmount}
                    </div>
                  </div>
                </div>
              </div>
              <div className="proceed">
                <button>PROCEED TO SHIPPING</button>
              </div>
              <div className="coupons">
                <div className="apply-coupons">APPLY COUPON</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="else-block">
          <div className="else">
            <div className="wrap-else">
              <h1>Your Shopping Bag is Empty!!</h1>
              <div className="flex-continue">
                <Link style={{ textDecoration: "none" }} to={`/shop`}>
                  <button
                    style={{ cursor: "pointer" }}
                    className="continue-shopping"
                  >
                    CONTINUE SHOPPING
                  </button>
                </Link>
              </div>

              <div className="features">
                <div className="feature">
                  <VerifiedUserIcon
                    style={{ color: "rgba(176,153,117,255)", fontSize: "30px" }}
                  />{" "}
                  <div
                    style={{
                      color: "rgba(176,153,117,255)",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    SECURE PAYMENTS
                  </div>
                </div>
                <div className="feature">
                  <CurrencyRupeeIcon
                    style={{ color: "rgba(176,153,117,255)", fontSize: "30px" }}
                  />{" "}
                  <div
                    style={{
                      color: "rgba(176,153,117,255)",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    CASH ON DELIEVRY
                  </div>
                </div>
                <div className="feature">
                  <VerifiedIcon
                    style={{ color: "rgba(176,153,117,255)", fontSize: "30px" }}
                  />{" "}
                  <div
                    style={{
                      color: "rgba(176,153,117,255)",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ASSURED QUALITY
                  </div>
                </div>
                <div className="feature">
                  <CachedIcon
                    style={{ color: "rgba(176,153,117,255)", fontSize: "30px" }}
                  />{" "}
                  <div
                    style={{
                      color: "rgba(176,153,117,255)",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    EASY RETURNS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bag: state.shop.bag,
    bagTotal: state.shop.bagTotal,
    bagDiscount: state.shop.bagDiscount,
    totalAmount: state.shop.totalAmount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (ID) => dispatch(removeFromCart(ID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bag);
