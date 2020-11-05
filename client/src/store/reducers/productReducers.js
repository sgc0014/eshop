export const productListReducer = (state = { products:[ ] },action) => {
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':
            return { loading: true, products: [] }
        case 'PRODUCT_LIST_SUCCESS':
            return { loading: false, products: action.payload }
        case 'PRODUCT_LIST_FAIL':
            return { loading: false, error: action.payload}
        
        default:
            return state

    }
}

export const productDetailReducer = (state = { products:[ ] },action) => {
    switch(action.type){
        case 'PRODUCT_DETAIL_REQUEST':
            return { loading: true, product: [] }
        case 'PRODUCT_DETAIL_SUCCESS':
            return { loading: false, product: action.payload }
        case 'PRODUCT_DETAIL_FAIL':
            return { loading: false, error: action.payload}
        
        default:
            return state

    }
}


