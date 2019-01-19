import React from 'react';
import './search.css';
import SortingComponent from './SortingComponent';

const SearchComponent = () => {
    return (
        <div className='search_container'>
            <div>
                <SortingComponent/>
            </div>
            <input placeholder='Username'></input>
            <div>
                <input className='numberInput' type='number' placeholder='From'/>
                <span className='label'>TotalContributions</span>
                <input className='numberInput' type='number' placeholder='To'/>
            </div>
            <button className='btn btn-success'>Search</button>
        </div>
    );
};
 
export default SearchComponent;