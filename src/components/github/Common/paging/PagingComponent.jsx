import React from 'react';
import PropTypes from 'prop-types';
import './paging.css';
import PagingDetailsComponent from './PagingDetailsComponent';

const PagingComponent = ({ pages, onPageChangeHandler, currentPage }) => (
    <div className='pages-container'>
        {
            pages.map((page, i) => {
                return <PagingDetailsComponent currentPage={currentPage}
                    page={page}
                    key={i}
                    onPageChangeHandler={onPageChangeHandler}/>;
            })
        }
    </div>
);

PagingComponent.propTypes = {
    pages: PropTypes.array.isRequired,
    onPageChangeHandler: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};
 
export default PagingComponent;