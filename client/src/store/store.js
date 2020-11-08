import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import { userLoginReducer,userSignUpReducer } from './reducers/userReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userSignUp:userSignUpReducer
})
const cartItemsStorage =  localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]
const userInfoStorage =  localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null

const initialState = {
    cart: {cartItems: cartItemsStorage},
    user:{userInfo: userInfoStorage}
}

const middleware = [thunk]

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store