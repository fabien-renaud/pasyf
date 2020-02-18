import {FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE} from './actionTypes';

const initialState = {
    products: [],
    isLoading: false,
    error: ''
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_START:
            // Keep products, set loading, remove error
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_PRODUCT_SUCCESS:
            // Set products, remove loading
            return {
                products: action.payload,
                isLoading: false
            };
        case FETCH_PRODUCT_FAILURE:
            // Keep products, remove loading, set error
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
};
