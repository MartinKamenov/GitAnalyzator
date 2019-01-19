import React from 'react';
import SortingAttributes from '../../../contracts/SortingAttributes';
import PropTypes from 'prop-types';

const SortingComponent = ({ onSortByChanged }) => (
    <select
        onChange={onSortByChanged}
        className='sorting-container'>
        {
            SortingAttributes.map((attribute, i) => 
                <option
                    key={i}
                    value={attribute.sortBy}>
                    {attribute.visible}
                </option>
            )
        }      
    </select>
);

SortingComponent.propTypes = {
    onSortByChanged: PropTypes.func.isRequired
};
 
export default SortingComponent;