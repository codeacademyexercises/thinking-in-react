import { connect } from 'react-redux';
import FilterableProductTable from '../thinking-in-react/FilterableProductTable/FilterableProductTable';
import {
    toggleStock,
    searchFor,
    } from '../actions/actions';

const mapStatetoProps = ( state )=>{
    return {
        search: state.search,
        inStock: state.inStock,
    }
}

const mapDispatchtoProps = ( dispatch )=>{
    return {
        changeSearchText: (text) => dispatch(searchFor(text)),
        toggleStock: ()=>dispatch(toggleStock()),
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchtoProps,
)(FilterableProductTable);

