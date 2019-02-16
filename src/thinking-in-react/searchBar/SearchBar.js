import React, { Component } from 'react';
import '../App/App.css';

class SearchBar extends Component{
    render(){
        return(
            <div className="SearchBarContainer">
                <div>
                    <input type="search" placeholder="Search..." id="searchBar" defaultValue={this.props.search} onChange={this.props.SearchInput}/>
                </div>
                <div>
                    <input type="checkbox" id="inStock" defaultValue={this.props.stock} onChange={this.props.InStock}/>
                    <label >Only show products in stock</label>
                </div>
                
            </div>
        );
    }
}

export default SearchBar;