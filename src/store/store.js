import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {customerReducer, productReducer, purchaseReducer} from '../features';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    customer: customerReducer,
    product: productReducer,
    purchase: purchaseReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
