import React from 'react';
import PropTypes from 'prop-types';

const FullProfileTabComponent = ({tab, currentTab, changeTabHandler}) => (
    <span
        className={(() => {
            if(tab === currentTab) {
                return 'tab-container active';
            } else {
                return 'tab-container inactive';
            }
        })()}
        onClick={() => changeTabHandler(tab)}>
        {tab}
    </span>
);

FullProfileTabComponent.propTypes = {
    tab: PropTypes.string.isRequired,
    currentTab: PropTypes.string.isRequired,
    changeTabHandler: PropTypes.func.isRequired
};
 
export default FullProfileTabComponent;