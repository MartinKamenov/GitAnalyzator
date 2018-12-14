import React from 'react';
import years from '../../contracts/AvailableYears';
import PropTypes from 'prop-types';

const GithubYearSelector = ({handleSelectedYear}) => {
    return ( 
        <div className="years-container">
            {years.map((year, i) => (
                <div key={i} onClick={() => handleSelectedYear(year)}>{year}</div>
            ))}
        </div>
    );
}

GithubYearSelector.propTypes = {
    handleSelectedYear: PropTypes.func.isRequired
}
 
export default GithubYearSelector;