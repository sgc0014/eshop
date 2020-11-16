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
    localStorage.removeItem("cartItems");
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

export const allOrderList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "ORDER_GET_REQUEST" });
    const { userInfo } = getState().userLogin;
    const { data } = await Axios.get(
      `http://localhost:5000/api/orders/`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: "ORDER_GET_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ORDER_GET_FAIL",
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
    const  data  = await Axios.post(
      `http://localhost:5000/api/orders/pay/${id}`,
      paymentResult,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: "ORDER_PAY_SUCCESS", success: true });
    dispatch({ type: "ORDER_PAY_RESET" });
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
export const updateToDelivered = (id) => async (
  dispatch,
  getState
) => {
 
  try {
    dispatch({ type: "ORDER_DELIVERED_REQUEST" });
    const { userInfo } = getState().userLogin;
    console.log(userInfo)
    const  data  = await Axios.put(
      `http://localhost:5000/api/orders/delivered/${id}`,{},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: "ORDER_DELIVERED_SUCCESS", success: true });
    dispatch({ type: "ORDER_DELIVERED_RESET" });
  } catch (error) {
    dispatch({
      type: "ORDER_DELIVERED_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const verifyEsewa = (paymentResult) => async (
  dispatch,
  getState
) => {
 
  try {
   
    const { userInfo } = getState().userLogin;
    const  data  = await Axios.post(
      `http://localhost:5000/api/orders/pay/verify`,
      paymentResult,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: "ORDER_PAY_SUCCESS", success: true });
    dispatch({ type: "ORDER_PAY_RESET" });
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

