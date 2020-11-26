export const productCreateReducer = (state = {},action) => {
  switch(action.type){
      case 'PRODUCT_CREATE_REQUEST':
          return { loading: true }
      case 'PRODUCT_CREATE_SUCCESS':
          return { loading: false, success:true }
      case 'PRODUCT_CREATE_FAIL':
          return { loading: false, error: action.payload}
      case 'PRODUCT_CREATE_RESET':
            return { }
      default:
          return state

  }
}

export const productListReducer = (state = {},action) => {
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':
            return { loading: true }
        case 'PRODUCT_LIST_SUCCESS':
            return {  products: action.payload,loading: false }
        case 'PRODUCT_LIST_FAIL':
            return { loading: false, error: action.payload}
        
        default:
            return state

    }
}

export const productDetailReducer = (state = { },action) => {
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

export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case "PRODUCT_UPDATE_REQUEST":
        return { loading: true };
      case "PRODUCT_UPDATE_SUCCESS":
        return { loading: false,success:true };
      case "PRODUCT_UPDATE_FAIL":
        return { loading: false, error: action.payload };
      case "PRODUCT_UPDATE_RESET":
        return{}
      default:
        return state;
    }
  };

  export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case "PRODUCT_DELETE_REQUEST":
        return { loading: true };
      case "PRODUCT_DELETE_SUCCESS":
        return { loading: false, succes:true };
      case "PRODUCT_DELETE_FAIL":
        return { loading: false, error: action.payload };
      
      default:
        return state;
    }
  };

