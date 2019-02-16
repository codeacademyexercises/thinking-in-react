export const TOGGLE_STOCK = 'TOGGLE_STOCK';
export const SEARCH_FOR_PRODUCTS = 'SEARCH_FOR_PRODUCTS';

export const toggleStock = () => {
    return {
        type: TOGGLE_STOCK,
    }
}

export const searchFor = ( searchText ) => {
    return {
        type: SEARCH_FOR_PRODUCTS,
        text: searchText,
    }
}