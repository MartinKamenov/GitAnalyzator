import React from 'react';
import years from '../../contracts/AvailableYears';
import PropTypes from 'prop-types';

const GithubYearSelector = ({handleClassYear, handleSelectedYear}) => {
    return (
        <div className="years-container center row">
            <h3 className="legend-header">Year</h3>
            <div>
                {years.map((year, i) => (
                    <div className={handleClassYear(year)}
                    key={i}
                    onClick={() => handleSelectedYear(year)}>
                    {year}
                    </div>
                ))}
            </div>
        </div>
    );
}

GithubYearSelector.propTypes = {
    handleClassYear: PropTypes.func.isRequired,
    handleSelectedYear: PropTypes.func.isRequired
}
 
export default GithubYearSelector;