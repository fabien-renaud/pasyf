import {FETCH_CUSTOMER_START, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE} from './actionTypes';

const initialState = {
    customers: [],
    isLoading: false,
    error: ''
};

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMER_START:
            // Keep customers, set loading, remove error
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_CUSTOMER_SUCCESS:
            // Set customers, remove loading
            return {
                customers: action.payload,
                isLoading: false
            };
        case FETCH_CUSTOMER_FAILURE:
            // Keep customers, remove loading, set error
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
};
