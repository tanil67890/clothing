import React from 'react';
import "./filter.css"
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { connect } from "react-redux";
import { refineByBrand, refineByCategory, refineByColor, refineByGender } from "../../redux/shop/shop-actions"
import { useEffect } from 'react';

function Filter(props) {
  //console.log(props);
  return (
    <div className='filter-container'>
      <h2>Refine By</h2>
      <FormGroup style={{borderBottom: "1px solid black"}}>
        <FormLabel style={{color: "black",fontWeight: "bold", fontSize: "20px"}} id="formLabelGender">Gender</FormLabel>
        {props.genders.map((gender) => {
            return ( <FormControlLabel style={{paddingLeft: "19px"}} key={gender.id} control={ <Checkbox checked={gender.checked} onChange={() => props.refineByGender(gender.id) } value={gender.value}/> } label={gender.name}/> );
        })}
      </FormGroup>

      <FormGroup style={{borderBottom: "1px solid black"}}>
        <FormLabel style={{color: "black",fontWeight: "bold", paddingTop: "20px", fontSize: "20px"}} id="formLabelBrand">Brands</FormLabel>
        {props.brands.map((brand) => {
            return ( <FormControlLabel style={{paddingLeft: "19px"}} key={brand.id} control={ <Checkbox checked={brand.checked} onChange={() => props.refineByBrand(brand.id)} value={brand.name}/> } label={brand.name}/> );
        })}
      </FormGroup>

      <FormGroup style={{borderBottom: "1px solid black"}}>
        <FormLabel style={{color: "black",fontWeight: "bold", paddingTop: "20px", fontSize: "20px"}} id="formLabelColor">Colors</FormLabel>
        {props.colors.map((color) => {
             return ( <FormControlLabel style={{paddingLeft: "19px"}} key={color.id} control={ <Checkbox checked={color.checked} onChange={() => props.refineByColor(color.id)} value={color.name}/> } label={color.name}/> );
        })}
      </FormGroup>

      <FormGroup style={{borderBottom: "1px solid black"}}>
        <FormLabel style={{color: "black",fontWeight: "bold", paddingTop: "20px", fontSize: "20px"}} id="formLabelColor">Categories</FormLabel>
        {props.categories.map((category) => {
             return ( <FormControlLabel style={{paddingLeft: "19px"}} key={category.id} control={ <Checkbox checked={category.checked} onChange={() => props.refineByCategory(category.id)} value={category.value}/> } label={category.name}/> );
        })}
      </FormGroup>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    refineByGender: (ID) => dispatch(refineByGender(ID)),
    refineByBrand: (ID) => dispatch(refineByBrand(ID)),
    refineByColor: (ID) => dispatch(refineByColor(ID)),
    refineByCategory: (ID) => dispatch(refineByCategory(ID)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
