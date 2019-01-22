import React from 'react';
import PropTypes from 'prop-types';

const FullProfileTabComponent = ({tab, currentTab}) => (
    <span className='tab-container'>{tab}</span>
);

FullProfileTabComponent.propTypes = {
    tab: PropTypes.string.isRequired,
    currentTab: PropTypes.string.isRequired
};
 
export default FullProfileTabComponent;