import { GET_PRODUCTS, GET_PRODUCTS_SEARCH } from "./actions";

const initialState = {
  allProducts: [],
  productsToShow: [],
  
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        productsToShow: action.payload,
      };
    case GET_PRODUCTS_SEARCH:
      return {
        ...state,
        allProducts: action.payload,
        productsToShow: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
