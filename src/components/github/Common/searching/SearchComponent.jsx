import React from 'react';
import './search.css';
import SortingComponent from './SortingComponent';

const SearchComponent = () => {
    return (
        <div className='search_container'>
            <SortingComponent/>
            <input placeholder='Username'></input>
            <button className='search-btn btn btn-success'>Search</button>
        </div>
    );
};
 
export default SearchComponent;