export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGIN_FAILED":
      return { loading: false, error: action.payload };
      case "USER_LOGOUT":
        return {  };
    default:
      return state;
  }
};

export const userSignUpReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_SIGNUP_REQUEST":
        return { loading: true };
      case "USER_SIGNUP_SUCCESS":
        return { loading: false, userInfo: action.payload };
      case "USER_SIGNUP_FAILED":
        return { loading: false, error: action.payload };
      
      default:
        return state;
    }
  };
  