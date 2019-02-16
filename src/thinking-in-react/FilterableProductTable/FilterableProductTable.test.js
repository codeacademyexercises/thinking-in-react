import React from 'react';
import { shallow } from 'enzyme';
import FilterableProductTable from './FilterableProductTable.js';
import renderer from 'react-test-renderer';
import SearchBar from '../SearchBar/SearchBar.js';

describe('FilterableProductTable should ',()=>{
    it('render',()=>{
        const tree = renderer.create(<FilterableProductTable search="" inStock={true}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('functions working correctly and props are equal to state values',()=>{
        const wrapper = shallow(<FilterableProductTable/>);
        wrapper.setState({
            search: "",
            inStock: false,
        });
        expect(wrapper.state('search')).toEqual('');
        expect(wrapper.state('inStock')).toEqual(false);
        const instance = wrapper.instance();
        instance.SearchInput({
            target: {
                value: 'Elec',
            }
        });
        expect(wrapper.state('search')).toEqual('Elec');
        instance.InStock();
        expect(wrapper.state('inStock')).toEqual(true);
        expect(wrapper.find('SearchBar').props().search).toEqual('Elec');
        expect(wrapper.find('ProductTable').props().stock).toEqual(true);
    });
});