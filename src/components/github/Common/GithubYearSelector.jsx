import React from 'react';
import years from '../../contracts/AvailableYears';
import PropTypes from 'prop-types';

const GithubYearSelector = ({handleClassYear, handleSelectedYear}) => {
    return (
        <div className="years-container center">
            <h3 className="legend-header">Year</h3>
            <div className="row">
                {years.map((year, i) => (
                    <div className="col-sm-6 year-btn-container"
                    key={i}>
                        <div className={handleClassYear(year)}
                        onClick={() => handleSelectedYear(year)}>
                        {year}
                        </div>
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