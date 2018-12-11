import React from 'react';
import PropTypes from 'prop-types';

const LegendComponent = ({colorsData}) => {
    return (
        <div className="legend-container">
        {colorsData.map((data, i) => {
            return (
                <span key={i}>
                    <span className={data.classColor}></span>
                    <span> {data.title}</span>
                </span>
            )
        })}
        </div>
    );
}

LegendComponent.propTypes = {
    colorsData: PropTypes.array.isRequired
};

export default LegendComponent;