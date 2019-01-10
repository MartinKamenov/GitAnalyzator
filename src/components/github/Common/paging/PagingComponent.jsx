import React from 'react';
import PropTypes from 'prop-types';
import './paging.css';
import PagingDetailsComponent from './PagingDetailsComponent';

const PagingComponent = ({ pages, onPageChangeHandler }) => (
    <div>
        {
            pages.map((page, i) => {
                return <PagingDetailsComponent page={page} key={i} onPageChangeHandler={onPageChangeHandler}/>;
            })
        }
    </div>
);

PagingComponent.propTypes = {
    pages: PropTypes.array.isRequired,
    onPageChangeHandler: PropTypes.func.isRequired
};
 
export default PagingComponent;