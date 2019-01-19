import React from 'react';
import './search.css';
import SortingComponent from './SortingComponent';

const SearchComponent = ({onSearchUsernameChanged, onSearchHandler}) => {
    return (
        <div className='search_container'>
            <SortingComponent/>
            <input
                placeholder='Username'
                onChange={onSearchUsernameChanged}>
            </input>
            <button onClick={onSearchHandler} className='search-btn btn btn-success'>Search</button>
        </div>
    );
};
 
export default SearchComponent;