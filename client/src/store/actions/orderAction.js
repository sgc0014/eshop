import Axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: "ORDER_CREATE_REQUEST" });
    const { userInfo } = getState().userLogin;
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

export const getOrderDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "ORDER_DETAIL_REQUEST" });
    const { userInfo } = getState().userLogin;
    const { data } = await Axios.get(
      `http://localhost:5000/api/orders/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: "ORDER_DETAIL_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ORDER_DETAIL_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const orderList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "ORDER_LIST_REQUEST" });
    const { userInfo } = getState().userLogin;
    const { data } = await Axios.get(
      `http://localhost:5000/api/orders/myOrder`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: "ORDER_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ORDER_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateToPay = (id, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: "ORDER_PAY_REQUEST" });
    const { userInfo } = getState().userLogin;
    const { data } = await Axios.get(
      `http://localhost:5000/api/orders/${id}/pay`,
      paymentResult,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: "ORDER_PAY_SUCCESS", success: true });
  } catch (error) {
    dispatch({
      type: "ORDER_PAY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
