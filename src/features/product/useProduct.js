import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProduct} from './actions';

export const useProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    return {
        products,
        fetchProduct: () => dispatch(fetchProduct())
    };
};
