import React from 'react';
import SortingAttributes from '../../../contracts/SortingAttributes';

const SortingComponent = () => (
    <select>
        {
            SortingAttributes.map((attribute, i) => 
                <option
                    key={i}
                    value={attribute}>
                    {attribute}
                </option>
            )
        }      
    </select>
);
 
export default SortingComponent;