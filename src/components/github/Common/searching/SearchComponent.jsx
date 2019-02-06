import React from 'react';
import './search.css';
import SortingComponent from './SortingComponent';
import PropTypes from 'prop-types';
import SearchingLanguageComponent from './SearchingLanguageComponent';

const SearchComponent = ({onSortByChanged, onSearchUsernameChanged, onSearchHandler}) => {
    return (
        <div className='search_container'>
            <h2 style={{color: 'white'}}>Search</h2>
            <SortingComponent onSortByChanged={onSortByChanged}/>
            <input
                className='username-input'
                placeholder='Username'
                onChange={onSearchUsernameChanged}>
            </input>
            <button
                onClick={onSearchHandler}
                className='search-btn btn btn-success'>Search</button>
            <SearchingLanguageComponent/>
        </div>
    );
};

SearchComponent.propTypes = {
    onSortByChanged: PropTypes.func.isRequired,
    onSearchUsernameChanged: PropTypes.func.isRequired,
    onSearchHandler: PropTypes.func.isRequired
};
 
export default SearchComponent;