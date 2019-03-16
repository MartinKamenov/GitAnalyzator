import React from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';

const PieComponent = ({pieChartData, onMouseOver}) => (
    <PieChart data={pieChartData}
        animate={true}
        animationDuration={2000}
        animationEasing="ease"
        label={function(record) {
            const recordData = record.data[record.dataIndex];
            return recordData.percentage >= 20 ? recordData.title : '';
        }}
        labelStyle={{fill: 'white',
            left: '10px',
            fontSize: '10px'}}
        onMouseOver={onMouseOver}/>
);

PieComponent.propTypes = {
    pieChartData: PropTypes.array.isRequired,
    onMouseOver: PropTypes.func
}
 
export default PieComponent;