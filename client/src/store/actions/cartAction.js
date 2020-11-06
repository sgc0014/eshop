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
