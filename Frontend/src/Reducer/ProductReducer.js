let initState = { products: [], product: {}, loading: true, success: false }
export const ProductReducer = (state = initState, action) => {
    console.log("Product reducer+++++++++++++++",action)
    switch (action.type) {
        case 'DELETE_PRODUCT':
        case 'UPDATE_PRODUCT':
        case 'CREATE_PRODUCT':
        case 'FETCH_PRODUCTS':
            console.log("CCCCCCCC",state);
            return {
                ...state,
                // loading: true,
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            console.log("oooooooooo",state);
            console.log("PRODUCT SUCCESS", action.data)
            return {
                ...state,
                products: action.data,

                loading: false
                // success:action.data.success
            }
        case 'DELETE_PRODUCT_SUCCESS':
        case 'UPDATE_PRODUCT_SUCCESS':
        case 'CREATE_PRODUCT_SUCCESS':
            console.log("CREATE_PRODUCT_SUCCESS ACTION IN REDUCER", action.data);
            return {
                ...state,
                products: action.data.product ? state.products.concat(action.data.product): state.products,

                loading: false,
                success:action.data.success
            }
        case 'FETCH_PRODUCTS_FAILURE':
        case 'CREATE_PRODUCT_FAILURE':
        case 'UPDATE_PRODUCT_FAILURE':
        case 'DELETE_PRODUCT_FAILURE':
            return {
                ...state,
                loading: false,
                success: false,
            }
        default:
            return state
    }
}