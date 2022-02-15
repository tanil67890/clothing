import React, { useState } from "react";
import "./bagItem.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../../../redux/shop/shop-actions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function BagItem(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

 const [count, setCount] = useState(1);
 const handleIncrement = () => {
   setCount(count + 1);
 };
 const handleDecrement = () => {
   if (count > 1) setCount(count - 1);
   else {
     setCount(1);
     alert("Minimum limit reached");
   }
 };

  console.log(props);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="shoppingBag-wrap">
      <div className="itemImage">
        <img src={props.product.img} alt="" />
      </div>
      <div className="itemName">
        <p style={{ display: "inline-block" }}>{props.product.brand} -</p>{" "}
        <p style={{ display: "inline-block" }}>{props.product.name}</p>
      </div>
      <div className="itemInfo">
        <div className="itemSize">
          <p style={{ display: "inline-block", color: "gray" }}>SIZE - </p>
          <p style={{ display: "inline-block", fontWeight: "bold" }}>
            {" "}
            {props.product.selectedSize} 
          </p>
        </div>
        <div className="itemQuantity">
          <p style={{ display: "inline-block", color: "gray" }}>QTY - </p>

          <div style={{ display: "inline-block", fontWeight: "bold" }}>
            {" "}
            <div>
              <p style={{ cursor: "pointer" }} onClick={handleOpen}>
                {props.product.selectedQuantity} <ArrowDropDownIcon style={{paddingTop: "5px"}} />
              </p>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Select Quantity
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button
                      onClick={() => props.decrementQuantity(props.product.id)}
                      variant="contained"
                      color="error"
                    >
                      <RemoveIcon />
                    </Button>{" "}
                    <input
                      id="quantityCount"
                      style={{
                        width: "50px",
                        height: "30px",
                        textAlign: "center",
                      }}
                      value={props.product.selectedQuantity}
                      type="text"
                    />{" "}
                    <Button
                      onClick={() => props.incrementQuantity(props.product.id)}
                      variant="contained"
                      color="success"
                    >
                      <AddIcon />
                    </Button>
                  </Typography>
                  <Button
                    onClick={handleClose}
                    style={{ marginTop: "20px" }}
                    variant="contained"
                    color="info"
                  >
                    Save
                  </Button>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="itemPrice">
        <div>
          <p style={{ color: "rgba(213,162,73,255)" }}>
            <del>Rs. {props.product.price}</del>
          </p>
          <p>Rs .{props.product.offerPrice}</p>
        </div>

        <Button
          onClick={() => props.removeFromCart(props.product.id)}
          color="error"
          style={{ margin: "2px 0px" }}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bag: state.shop.bag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (ID) => dispatch(removeFromCart(ID)),
    incrementQuantity: (ID) => dispatch(incrementQuantity(ID)),
    decrementQuantity: (ID) => dispatch(decrementQuantity(ID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BagItem);
