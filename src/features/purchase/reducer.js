import {FETCH_PURCHASE_START, FETCH_PURCHASE_SUCCESS, FETCH_PURCHASE_FAILURE} from './actionTypes';

const initialState = {
    purchases: [],
    isLoading: false,
    error: ''
};

export const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PURCHASE_START:
            // Keep purchases, set loading, remove error
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_PURCHASE_SUCCESS:
            // Set purchases, remove loading
            return {
                purchases: action.payload,
                isLoading: false
            };
        case FETCH_PURCHASE_FAILURE:
            // Keep purchases, remove loading, set error
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
};
