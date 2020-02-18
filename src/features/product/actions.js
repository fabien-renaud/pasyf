import {FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS} from './actionTypes';

const fetchProductStart = () => {
    return {
        type: FETCH_PRODUCT_START
    }
};

const fetchProductSuccess = (payload) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload
    }
};

const fetchProductFailure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        error
    }
};

export const fetchProduct = () => {
    return dispatch => {
        dispatch(fetchProductStart());
        fetch(`${process.env.REACT_APP_API_URL}/products`, {method: 'GET'})
            .then((products) => products.json())
            .then((products) => dispatch(fetchProductSuccess(products)))
            .catch((error) => dispatch(fetchProductFailure(error)));
    }
};
