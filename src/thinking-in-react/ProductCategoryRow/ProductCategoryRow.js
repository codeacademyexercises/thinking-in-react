import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow.js';
import '../App/App.css';

class ProductCategoryRow extends Component{
    render(){
        return (
            <div>
            <table>
                <tbody>
                <tr>
                    <th>{this.props.category}</th>
                </tr>
                <ProductRow category={this.props.category} items={this.props.product}/>
                </tbody>
            </table>
            </div>
        );
    };
};

export default ProductCategoryRow;