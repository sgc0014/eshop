export const orderCreateReducer = (state={order:[]},action) => {
    switch(action.type){
        case "ORDER_CREATE_REQUEST":
            return {...state,loading:true}
        case "ORDER_CREATE_SUCCESS":
             return {...state,loading:false,order:[...state.order,action.payload]}
        case "ORDER_CREATE_FAIL":
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}