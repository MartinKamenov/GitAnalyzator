import React from 'react';
import './search.css';
import SortingComponent from './SortingComponent';
import PropTypes from 'prop-types';

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

SearchComponent.propTypes = {
    onSortByChanged: PropTypes.func.isRequired,
    onSearchUsernameChanged: PropTypes.func.isRequired,
    onSearchHandler: PropTypes.func.isRequired
};
 
export default SearchComponent;