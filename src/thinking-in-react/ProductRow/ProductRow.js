import React, { Component } from 'react';
import '../App/App.css';

class ProductRow extends Component{
    render(){
        let products = [];
        this.props.items.forEach((element)=>{
            if(element.category===this.props.category){
                if(element.stocked===true){
                products.push(<tr key={element.Name}><td>{element.Name}</td><td>${element.Price}</td></tr>);
                }else{
                products.push(<tr key={element.Name}><td className="NotInStock">{element.Name}</td><td>${element.Price}</td></tr>);
                }
            }
        });
        return (
            products
        );
    };
};

export default ProductRow;