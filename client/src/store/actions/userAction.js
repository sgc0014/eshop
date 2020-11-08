import Axios from "axios";

export const userSignUp = ({ email, password, name }) => async (dispatch) => {
  try {
    dispatch({ type: "USER_SIGNUP_REQUEST" });
    const { data } = await Axios.post(
      "http://localhost:5000/api/auth/signUp",
      { email, password, name },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "USER_SIGNUP_SUCCESS",
      payload: data,
    });

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: "USER_SIGNUP_FAIL",  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message, });
  }
};

export const userLogin = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    const { data } = await Axios.post(
      "http://localhost:5000/api/auth/logIn",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");

  dispatch({ type: "USER_LOGOUT" });
};
