import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchCustomer} from './actions';

export const useCustomer = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customer.customers);

    useEffect(() => {
        dispatch(fetchCustomer());
    }, [dispatch]);

    return {
        customers,
        fetchCustomer: () => dispatch(fetchCustomer())
    };
};
