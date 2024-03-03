import { GET_PRODUCTS, GET_PRODUCTS_SEARCH, STEPS_CART  } from "./actions";

const initialState = {
  allProducts: [],
  productsToShow: [],
  stepsCartComplete: {
    one: false,
    two: false,
    three: false,
  },
  
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
    case STEPS_CART :
      return {
        ...state,
        stepsCartComplete: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
