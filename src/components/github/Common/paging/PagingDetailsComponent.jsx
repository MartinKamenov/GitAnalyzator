import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PagingDetailsComponent = ({ page }) => (
    <Link className='page-container' to={'/overview?page=' + page}>
        <span>{ page }</span>
    </Link>
);

PagingDetailsComponent.propTypes = {
    page: PropTypes.number.isRequired
};
 
export default PagingDetailsComponent;