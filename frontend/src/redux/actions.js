import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SEARCH = "GET_PRODUCTS_SEARCH";
export const CARRITO = "CARRITO"

// export const cargarProductos = (products) => {
//   axios.post("http://localhost:8081/producto", products);
// };

export const getProductsList = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:8081/producto/activos?size=150"
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
        `http://localhost:8081/producto/search?productName=${productName}&size=150`
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
