import React from 'react';
import PropTypes from 'prop-types';
import './paging.css';
import PagingDetailsComponent from './PagingDetailsComponent';

const PagingComponent = ({ pages }) => (
    <div>
        {
            pages.map((page, i) => {
                return <PagingDetailsComponent page={page} key={i}/>
            })
        }
    </div>
);

PagingComponent.propTypes = {
    pages: PropTypes.array.isRequired
};
 
export default PagingComponent;