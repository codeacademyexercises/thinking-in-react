import React from 'react';
import SearchBar from './SearchBar.js';
import Renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Checking ',()=>{
    it('Snapshot test will work',()=>{
        const tree = Renderer.create(<SearchBar/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('count of each ClassName is correct and Text beside checkbox is as specified',()=>{
        const wrapper = shallow(<SearchBar/>);
        expect(wrapper.find('.SearchBarContainer')).toHaveLength(1);
        expect(wrapper.text()).toEqual("Only show products in stock");
    });
    it('onChange functions to be called on change',()=>{
        let wrapper = shallow(<SearchBar/>);
        const checkbox = jest.fn();
        const searchbar = jest.fn();
        wrapper = wrapper.setProps({
            search: 'Electronics',
            stock: true,
            InStock: checkbox,
            SearchInput: searchbar,
        });
        wrapper.find('input').at(1).simulate('change');
        expect(checkbox).toHaveBeenCalled();
        wrapper.find('input').at(0).simulate('change');
        expect(searchbar).toHaveBeenCalled();
    });
    it('defaultValues are set as specified',()=>{
        const wrapper = shallow(<SearchBar stock={true} search="Electronics"/>);
        expect(wrapper.find('input').at(0).props().defaultValue).toEqual("Electronics");
        expect(wrapper.find('input').at(1).props().defaultValue).toEqual(true);
    });
});