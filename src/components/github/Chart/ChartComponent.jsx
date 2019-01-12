import React from 'react';
import PropType from 'prop-types';
import { Chart } from "react-charts";
import LegendComponent from './LegendComponent';

const ChartComponent = ({dataArray}) => {
    return (
        <React.Fragment>
            {(() => {
                if(dataArray.classColor) {
                    return <LegendComponent colorsData={dataArray}/>;
                }
            })()}
            <Chart data={dataArray.map((dataDetails, i) => {
                return ({
                    label: dataDetails.title,
                    data: dataDetails.contributions
                });
            })}
            axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
            ]}/>
        </React.Fragment>
    );
}

ChartComponent.propType = {
    dataArray: PropType.array.isRequired
}
 
export default ChartComponent;