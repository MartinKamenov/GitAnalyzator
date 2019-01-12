import React from 'react';
import PropTypes from 'prop-types';

const LegendComponent = ({colorsData}) => {
    return (
        <div className="legend-container">
            <h3 className="legend-header">Legend</h3>
            {colorsData.map((data, i) => {
                return (
                    <div key={i}>
                        <span className={data.classColor}></span>
                        <span>{data.title}</span>
                    </div>
                );
            })}
        </div>
    );
}

LegendComponent.propTypes = {
    colorsData: PropTypes.array.isRequired
};

export default LegendComponent;