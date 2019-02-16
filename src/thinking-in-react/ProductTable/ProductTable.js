import React ,{ Component } from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow.js';

class ProductTable extends Component{
    store = [{category: 'Sporting Goods',Name: 'Football',Price: 49.99, stocked: true},
    {category: 'Sporting Goods',Name: 'Baseball',Price: 9.99, stocked: true},
    {category: 'Sporting Goods',Name: 'Basketball',Price: 29.99, stocked: false},
    {category: 'Electronics',Name: 'iPod Touch',Price: 99.99, stocked: true},
    {category: 'Electronics',Name: 'iPhone 5',Price: 399.99, stocked: false},
    {category: 'Electronics',Name: 'Nexus 7',Price: 199.99, stocked: true},
    ];
    InterestedItems = (regex,instock)=> this.store.reduce((acc, item)=>{
        if(item.category.search(regex)!==-1 || item.Name.search(regex)!==-1){
            if(instock===true){
                if(item.stocked===true){
                    acc.push(item);
                }
            }else{
            acc.push(item);
            }
        }
        return acc;
    },[]);
    Categories = (result) => {
        return result.reduce((acc,item)=>{
            if(acc.indexOf(item.category)===-1){
                acc.push(item.category);
            }
            return acc;
        },[]);
    };
    render(){
        console.log(this.props.search,this.props.stock);
        let display;
        let regex = new RegExp("^"+this.props.search, "i");
        let instock = this.props.stock;
        let result = this.InterestedItems(regex,instock);
        let categories = this.Categories(result);
        if(result.length===0){
            display="Srry No Items Found...";
        }else{
            display = [];
            categories.forEach((category)=>{
                display.push(<ProductCategoryRow key={category} category={category} product={result}/>);
            });
            display.splice(0,<table>);
            display.splice(1,<tr key="ProductHeader">
                <th>Name</th><th>Price</th></tr>);
                display.splice(1,<tbody>);
                    display.push(</tbody>)
                display.push(</table>);
        }
        return(
            <div className="tableDetails">
                {display}
            </div>
        );
    }
};

export default ProductTable;