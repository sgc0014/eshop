export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const item = action.payload;
      return { ...state, cartItems: [...state.cartItems, item] };

    case "REMOVE_CART_ITEM":
      const Selecteditem = action.payload;
      const filteredItems = state.cartItems.filter(
        (x) => x._id !== Selecteditem._id
      );
      return { ...state, cartItems: filteredItems };
    case "SAVE_SHIPPING_ADDRESS":
      return { ...state, shippingAddress: action.payload };
    case "SAVE_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.payload };
    default:
      return state;
  }
};
