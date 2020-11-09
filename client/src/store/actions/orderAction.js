import Axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
     
    dispatch({ type: "ORDER_CREATE_REQUEST" });
    const {userInfo} = getState().userLogin
    const { data } = await Axios.post(
      "http://localhost:5000/api/orders",
      order,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ORDER_CREATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
