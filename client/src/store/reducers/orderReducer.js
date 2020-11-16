export const orderCreateReducer = (state={},action) => {
    switch(action.type){
        case "ORDER_CREATE_REQUEST":
            return {...state,loading:true}
        case "ORDER_CREATE_SUCCESS":
             return {...state,loading:false,success:true,order:action.payload}
        case "ORDER_CREATE_FAIL":
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export const allOrderReducer = (state={},action) => {
    switch(action.type){
        case "ORDER_GET_REQUEST":
            return {...state,loading:true}
        case "ORDER_GET_SUCCESS":
             return {...state,loading:false,success:true,order:action.payload}
        case "ORDER_GET_FAIL":
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export const orderDetailReducer = (state={},action) => {
    switch(action.type){
        case "ORDER_DETAIL_REQUEST":
            return {...state,loading:true}
        case "ORDER_DETAIL_SUCCESS":
             return {...state,loading:false,order:action.payload}
        case "ORDER_DETAIL_FAIL":
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export const orderPayReducer = (state={},action) => {
    switch(action.type){
        case "ORDER_PAY_REQUEST":
            return {...state,loading:true}
        case "ORDER_PAY_SUCCESS":
             return {...state,loading:false,success:true}
        case "ORDER_PAY_FAIL":
            return {...state,loading:false,error:action.payload}
        case "ORDER_PAY_RESET":
                return {}
        default:
            return state
    }
}

export const orderDeliveredReducer = (state={},action) => {
    switch(action.type){
        case "ORDER_DELIVERED_REQUEST":
            return {...state,loading:true}
        case "ORDER_DELIVERED_SUCCESS":
             return {...state,loading:false,success:true}
        case "ORDER_DELIVERED_FAIL":
            return {...state,loading:false,error:action.payload}
        case "ORDER_DELIVERED_RESET":
                return {}
        default:
            return state
    }
}

export const orderListReducer = (state={},action) => {
    switch(action.type){
        case "ORDER_LIST_REQUEST":
            return {...state,loading:true}
        case "ORDER_LIST_SUCCESS":
             return {...state,loading:false,userOrders:action.payload}
        case "ORDER_LIST_FAIL":
            return {...state,loading:false,error:action.payload}
      
        default:
            return state
    }
}

export const esewaVerifyReducer = (state={},action) => {
    switch(action.type){ 
        case "ESEWA_VERIFY":
             return {...state,verify:action.payload}
 
        default:
            return state
    }
}

