import React from 'react';
import './search.css';
import SortingComponent from './SortingComponent';
import PropTypes from 'prop-types';
import SearchingLanguageComponent from './SearchingLanguageComponent';

const SearchComponent = ({
    onSortByChanged,
    onSearchUsernameChanged,
    onSearchHandler,
    onLanguageChanged,
    selectedLanguages,
    searchUsername}) => {
    return (
        <div className='search_container'>
            <h2 style={{color: 'white'}}>Search</h2>
            <SortingComponent onSortByChanged={onSortByChanged}/>
            <input
                value={searchUsername}
                className='username-input'
                placeholder='Username'
                onChange={onSearchUsernameChanged}>
            </input>
            <button
                onClick={onSearchHandler}
                className='search-btn btn btn-success'>Search</button>
            <SearchingLanguageComponent
                selectedLanguages={selectedLanguages}
                onLanguageChanged={onLanguageChanged}/>
        </div>
    );
};

SearchComponent.propTypes = {
    onSortByChanged: PropTypes.func.isRequired,
    onSearchUsernameChanged: PropTypes.func.isRequired,
    onSearchHandler: PropTypes.func.isRequired,
    onLanguageChanged: PropTypes.func.isRequired,
    selectedLanguages: PropTypes.array.isRequired,
    searchUsername: PropTypes.string.isRequired
};
 
export default SearchComponent;