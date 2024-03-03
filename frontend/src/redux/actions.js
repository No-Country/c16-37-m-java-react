import axios from "axios";


// export const cargarProductos = (products) => {
  //   axios.post("http://localhost:8081/producto", products);
  // };
  
  export const getProductsList = () => {
    return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://ecommerce.c3wco4c0ixns.us-east-2.rds.amazonaws.com/producto/activos?size=150"
        );
      return dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getProductsSearch = (productName) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://ecommerce.c3wco4c0ixns.us-east-2.rds.amazonaws.com/producto/search?productName=${productName}&size=150`
        );
        return dispatch({
          type: GET_PRODUCTS_SEARCH,
          payload: response.data,
        });
      } catch (error) {
        return error.message;
      }
    };
  };
  
  export const getStepsCart = (stepComplete) => {
    let stepsCartComplete = {
      one: false,
      two: false,
      three: false
   };
    if(stepComplete === 1){
      stepsCartComplete.one = true
      console.log('se activo paso 1')
      console.log(stepsCartComplete)
      
    }
    if(stepComplete === 2){
      stepsCartComplete.one = true
      stepsCartComplete.two = true
      console.log('se activo paso 2')
      console.log(stepsCartComplete)

    }
    if(stepComplete === 3){
      stepsCartComplete.one = true
      stepsCartComplete.two = true
      stepsCartComplete.three = true
      console.log('se activo paso 3')
      console.log(stepsCartComplete)

    }
    
    return (dispatch) => {
      dispatch({
        type: 'STEPS_CART', // Asegúrate de usar el tipo correcto
        payload: stepsCartComplete,
      });
    };
  };

  
  export const GET_PRODUCTS = "GET_PRODUCTS";
  export const GET_PRODUCTS_SEARCH = "GET_PRODUCTS_SEARCH";
  export const CARRITO = "CARRITO"
  export const STEPS_CART = "STEPS_CART"