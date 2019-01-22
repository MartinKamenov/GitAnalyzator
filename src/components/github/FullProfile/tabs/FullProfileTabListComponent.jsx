import React from 'react';
import FullProfileTabComponent from './FullProfileTabComponent';
import './css/fullProfileTabs.css';

const FullProfileTabListComponent = ({ tabs, currentTab }) => (
    <div className='tabs-container'>
        {
            tabs.map((tab, i) => <FullProfileTabComponent
                tab={tab}
                currentTab={currentTab}
                key={i}/>)
        }
    </div>
);
 
export default FullProfileTabListComponent;