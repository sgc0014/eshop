export const addCartItem = (item) => async (dispatch, getState) => {
  dispatch({ type: "ADD_CART_ITEM", payload: item });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeCartItem = (item) => async (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    payload: item,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveAddress = (data) => async (dispatch, getState) => {
  dispatch({ type: "SAVE_SHIPPING_ADDRESS", payload: data });

  localStorage.setItem(
    "shippingAddress",
    JSON.stringify(data)
  );
};
export const savePaymentMethod = (data) => async (dispatch, getState) => {
  dispatch({ type: "SAVE_PAYMENT_METHOD", payload: data });

  localStorage.setItem(
    "paymentMethod",
    JSON.stringify(data)
  );
};


