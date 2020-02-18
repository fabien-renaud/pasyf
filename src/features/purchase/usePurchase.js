import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchPurchasesByCustomerId} from './actions';

export const usePurchase = (customerSub) => {
    const customerId = customerSub.replace('auth0|', '');
    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchase.purchases);

    useEffect(() => {
        dispatch(fetchPurchasesByCustomerId(customerId));
    }, [dispatch, customerId]);

    return {
        customerId,
        purchases,
        fetchPurchasesByCustomerId: () => dispatch(fetchPurchasesByCustomerId(customerId))
    };
};
