import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductRow from './ProductRow.js';

const store = [{category: 'Sporting Goods',Name: 'Football',Price: 49.99, stocked: true},
    {category: 'Sporting Goods',Name: 'Baseball',Price: 9.99, stocked: true},
    {category: 'Sporting Goods',Name: 'Basketball',Price: 29.99, stocked: false},
    {category: 'Electronics',Name: 'iPod Touch',Price: 99.99, stocked: true},
    {category: 'Electronics',Name: 'iPhone 5',Price: 399.99, stocked: false},
    {category: 'Electronics',Name: 'Nexus 7',Price: 199.99, stocked: true},
    ];

describe("<ProductRow /> should ",()=>{
    it("render",()=>{
        const tree = renderer.create(<ProductRow items={store} category="Sporting Goods"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("display correct set of products",()=>{
        const wrapper = shallow(<ProductRow items={store} category="Sporting Goods"/>);
        expect(wrapper.find('.NotInStock')).toHaveLength(1);
        expect(wrapper.find('tr')).toHaveLength(3);
    });
});