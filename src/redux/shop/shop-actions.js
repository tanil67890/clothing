import * as actionTypes from "./shop-types";

export const refineByGender = (ID) => {
    return{
        type: actionTypes.REFINE_BY_GENDER,
        payload: ID
    };
};

export const refineByBrand = (ID) => {
    return{
        type: actionTypes.REFINE_BY_BRAND,
        payload: ID
    };
};

export const refineByColor = (ID) => {
    return{
        type: actionTypes.REFINE_BY_COLOR,
        payload: ID
    };
};

export const refineByCategory = (ID) => {
    return{
        type: actionTypes.REFINE_BY_CATEGORY,
        payload: ID
    };
};

export const loadCurrentProduct = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_PRODUCT,
        payload: item,
    };
};

export const addToCart = (productID) => {
    return {
      type: actionTypes.ADD_TO_CART,
      payload: productID,
    };
};

export const removeFromCart = (productID) => {
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: productID,
    };
};

export const updateSelectedSize = (productID, size) => {
  return {
    type: actionTypes.UPDATE_SELECTED_SIZE,
    payload: {
      productID: productID,
      size: size,
    },
  };
};

export const incrementQuantity = (productID) => {
    return{
        type: actionTypes.INCREMENT_QUANITYT,
        payload: productID
    }
}

export const decrementQuantity = (productID) => {
  return {
    type: actionTypes.DECREMENT_QUANITYT,
    payload: productID,
  };
};

export const filterByBrand = (ID) => {
    return{
        type: actionTypes.FILTER_BY_BRAND,
        payload: ID
    };
};

export const filterByCategory = (ID) => {
  return {
    type: actionTypes.FILTER_BY_CATEGORY,
    payload: ID,
  };
};

export const searchProducts = (keyWord) => {
    return {
        type: actionTypes.SEARCH_PRODUCTS,
        payload: keyWord
    }
}