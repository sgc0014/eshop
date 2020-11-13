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


export const getuserList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "USER_LIST_REQUEST" });
    const { userInfo } = getState().userLogin;
    const { data } = await Axios.get(
      "http://localhost:5000/api/auth/getAlluser",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({
      type: "USER_LIST_SUCCESS",
      payload: data,
    });

    
  } catch (error) {
    dispatch({
      type: "USER_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const userdelete = (id) => async (dispatch, getState) => {
  console.log(id)
  try {
    dispatch({ type: "USER_DELETE_REQUEST" });
    const { userInfo } = getState().userLogin;
    const { data } = await Axios.put(
      "http://localhost:5000/api/auth/deleteuser",
      {id},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({
      type: "USER_DELETE_SUCCESS",
      payload: data,
    });

    
  } catch (error) {
    dispatch({
      type: "USER_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userdetail = (id) => async (dispatch, getState) => {
  
  try {
    dispatch({ type: "USER_DETAIL_REQUEST" });
    const { userInfo } = getState().userLogin;
    const { data } = await Axios.get(
      `http://localhost:5000/api/auth/getProfile/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({
      type: "USER_DETAIL_SUCCESS",
      payload: data,
    });

    
  } catch (error) {
    dispatch({
      type: "USER_DETAIL_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const postuserUpdate = (user) => async (dispatch, getState) => {

  try {
    
    dispatch({ type: "USER_UPDATE_REQUEST" });
    const { userInfo } = getState().userLogin;
    console.log(userInfo)
    const { data } = await Axios.post(
      `http://localhost:5000/api/auth/updateuser/${user.id}`,
      user
      ,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({
      type: "USER_UPDATE_SUCCESS",
    });
    dispatch({
      type: "USER_DETAIL_SUCCESS",
      payload:data
    });
    dispatch({
      type: "USER_UPDATE_RESET",
    });

    
  } catch (error) {
    dispatch({
      type: "USER_UPDATE_FAIL",
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
