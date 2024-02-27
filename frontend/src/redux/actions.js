import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";

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
