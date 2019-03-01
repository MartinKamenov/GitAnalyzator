import React from 'react';
import PropType from 'prop-types';
import { Chart } from 'react-charts';
import LegendComponent from './LegendComponent';

const ChartComponent = ({dataArray, shouldColorChart}) => {
    const chartClass = shouldColorChart ? 'colored-react-chart' : 'react-chart';
    return (
        <React.Fragment>
            {(() => {
                if(dataArray.length && dataArray[0].classColor) {
                    return <LegendComponent colorsData={dataArray}/>;
                }
            })()}
            <Chart className={chartClass} data={dataArray.map((dataDetails, i) => {
                return ({
                    label: dataDetails.title,
                    data: dataDetails.contributions
                });
            })}
            axes={[
                { primary: true, type: 'linear', position: 'bottom' },
                { type: 'linear', position: 'left' }
            ]}/>
        </React.Fragment>
    );
};

ChartComponent.propType = {
    dataArray: PropType.array.isRequired,
    shouldColorChart: PropType.bool
};
 
export default ChartComponent;