import {FETCH_PURCHASE_FAILURE, FETCH_PURCHASE_START, FETCH_PURCHASE_SUCCESS} from './actionTypes';

const fetchPurchaseStart = () => {
    return {
        type: FETCH_PURCHASE_START
    };
};

const fetchPurchaseSuccess = (payload) => {
    return {
        type: FETCH_PURCHASE_SUCCESS,
        payload
    };
};

const fetchPurchaseFailure = (error) => {
    return {
        type: FETCH_PURCHASE_FAILURE,
        error
    };
};

export const fetchPurchasesByCustomerId = (customerId) => {
    return dispatch => {
        dispatch(fetchPurchaseStart());
        fetch(`${process.env.REACT_APP_API_URL}/customers/${customerId}/purchases`, {method: 'GET'})
            .then((purchases) => purchases.json())
            .then((purchases) => dispatch(fetchPurchaseSuccess(purchases)))
            .catch((error) => dispatch(fetchPurchaseFailure(error)));
    };
};
