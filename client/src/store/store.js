import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})
const cartItemsStorage =  localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]

const initialState = {
    cart: {cartItems: cartItemsStorage}
}

const middleware = [thunk]

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store