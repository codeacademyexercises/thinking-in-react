import { combineReducers } from 'redux';
import {
    TOGGLE_STOCK,
    SEARCH_FOR_PRODUCTS,
} from '../actions/actions';

export const toggleStock = (state = false, action ) => {
    switch(action.type){
        case TOGGLE_STOCK: 
            return !state;
        default: 
            return state;
    }
}

export const productSearch = (state = '', action ) => {
    switch(action.type){
        case SEARCH_FOR_PRODUCTS:
            return action.text
        default: 
            return state
    }
}

export const productFilter = combineReducers({
    inStock: toggleStock,
    search: productSearch,
});
