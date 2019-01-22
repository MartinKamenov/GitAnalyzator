import React from 'react';
import FullProfileTabComponent from './FullProfileTabComponent';
import './css/fullProfileTabs.css';
import PropTypes from 'prop-types';

const FullProfileTabListComponent = ({ tabs, currentTab, changeTabHandler }) => (
    <div className='tabs-container'>
        {
            tabs.map((tab, i) => 
                <FullProfileTabComponent
                    changeTabHandler={changeTabHandler}
                    tab={tab}
                    currentTab={currentTab}
                    key={i}/>)
        }
    </div>
);

FullProfileTabListComponent.propTypes = {
    tabs: PropTypes.array.isRequired,
    currentTab: PropTypes.string.isRequired,
    changeTabHandler: PropTypes.func.isRequired
};
 
export default FullProfileTabListComponent;