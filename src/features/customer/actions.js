import {FETCH_CUSTOMER_FAILURE, FETCH_CUSTOMER_START, FETCH_CUSTOMER_SUCCESS} from './actionTypes';

const fetchCustomerStart = () => {
    return {
        type: FETCH_CUSTOMER_START
    }
};

const fetchCustomerSuccess = (payload) => {
    return {
        type: FETCH_CUSTOMER_SUCCESS,
        payload
    }
};

const fetchCustomerFailure = (error) => {
    return {
        type: FETCH_CUSTOMER_FAILURE,
        error
    }
};

export const fetchCustomer = () => {
    return dispatch => {
        dispatch(fetchCustomerStart());
        fetch(`${process.env.REACT_APP_API_URL}/customers`, {method: 'GET'})
            .then((customers) => customers.json())
            .then((customers) => dispatch(fetchCustomerSuccess(customers)))
            .catch((error) => dispatch(fetchCustomerFailure(error)));
    }
};
