import React from 'react';
import PropTypes from 'prop-types';
import './css/notFound.css'

const NotFoundComponent = ({field}) => (
    <h3 className='not-found-container'>No {field} could be found</h3>
);

NotFoundComponent.propTypes = {
    field: PropTypes.string.isRequired
};
 
export default NotFoundComponent;