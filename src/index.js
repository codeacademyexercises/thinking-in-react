import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import FilterableProductTable from './containers/FilterableProductTable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { productFilter } from './reducers/reducers';
const store = createStore(productFilter,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store = {store} >
    <FilterableProductTable />
    </Provider>
    , document.getElementById('root'));
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
