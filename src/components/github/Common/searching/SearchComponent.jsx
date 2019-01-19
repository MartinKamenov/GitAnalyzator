import React from 'react';
import './search.css';
import SortingComponent from './SortingComponent';

const SearchComponent = ({onSortByChanged, onSearchUsernameChanged, onSearchHandler}) => {
    return (
        <div className='search_container'>
            <SortingComponent onSortByChanged={onSortByChanged}/>
            <input
                placeholder='Username'
                onChange={onSearchUsernameChanged}>
            </input>
            <button onClick={onSearchHandler} className='search-btn btn btn-success'>Search</button>
        </div>
    );
};
 
export default SearchComponent;