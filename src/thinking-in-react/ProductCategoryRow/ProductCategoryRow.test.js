import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductCategoryRow from './ProductCategoryRow.js';

const store = [{category: 'Sporting Goods',Name: 'Football',Price: 49.99, stocked: true},
    {category: 'Sporting Goods',Name: 'Baseball',Price: 9.99, stocked: true},
    {category: 'Sporting Goods',Name: 'Basketball',Price: 29.99, stocked: false},
    {category: 'Electronics',Name: 'iPod Touch',Price: 99.99, stocked: true},
    {category: 'Electronics',Name: 'iPhone 5',Price: 399.99, stocked: false},
    {category: 'Electronics',Name: 'Nexus 7',Price: 199.99, stocked: true},
    ];

describe("<ProductCategoryRow /> should ",()=>{
    it("render",()=>{
        const tree = renderer.create(<ProductCategoryRow category="" product={store}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("have <ProductRow/> component and should assign props correctly",()=>{
        const wrapper = shallow(<ProductCategoryRow />);
        expect(wrapper.find('ProductRow')).toHaveLength(1);
        wrapper.setProps({
            category: ['Electronics'],
            product: [
                {category: 'Electronics',Name: 'iPod Touch',Price: 99.99, stocked: true},
            {category: 'Electronics',Name: 'iPhone 5',Price: 399.99, stocked: false},
            {category: 'Electronics',Name: 'Nexus 7',Price: 199.99, stocked: true},
            ],
        });
        expect(wrapper.find('ProductRow').props().category).toEqual(["Electronics"]);
        expect(wrapper.find('ProductRow').props().items).toEqual([store[3],store[4],store[5]]);
    });
});