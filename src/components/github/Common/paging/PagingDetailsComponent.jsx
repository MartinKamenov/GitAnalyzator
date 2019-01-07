import React from 'react';
import PropTypes from 'prop-types';

const PagingDetailsComponent = ({ page }) => (
    <span className='page-container'>{ page }</span>
);

PagingDetailsComponent.propTypes = {
    page: PropTypes.number.isRequired
};
 
export default PagingDetailsComponent;