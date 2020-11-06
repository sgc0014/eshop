export const cartReducer = (state = { cartItems:[] },action) => {
    switch(action.type){
      
        case 'ADD_CART_ITEM':
            const item = action.payload
            return {...state ,cartItems:[...state.cartItems,item]}

        case 'REMOVE_CART_ITEM':
           const Selecteditem = action.payload
           const filteredItems = state.cartItems.filter(x => x._id !== Selecteditem._id)
           return { ...state ,cartItems:filteredItems}
        default:
            return state

    }
}