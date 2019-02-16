import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductTable from './ProductTable.js';

describe("<ProductTable /> should ",()=>{
    it("render",()=>{
        const tree = renderer.create(<ProductTable search="" stock={true}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('have functions working correctly',()=>{
        const wrapper = shallow(<ProductTable/>);
        wrapper.setProps({
            search: "Electronics",
            stock: true,
        });
        expect(wrapper.find('ProductCategoryRow').props().product).toHaveLength(2);
        expect(wrapper.find('ProductCategoryRow').props().category).toEqual("Electronics");
        wrapper.setProps({
            search: "z",
            stock: true,
        });
        expect(wrapper.text()).toEqual("Srry No Items Found...");
    });
});