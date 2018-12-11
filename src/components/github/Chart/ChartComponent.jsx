import React from 'react';
import { Chart } from "react-charts";

const ChartComponent = ({dataArray}) => {
    console.log(dataArray);
    return ( 
        <Chart data={dataArray.map((dataDetails, i) => {
            console.log('dataDetails: ' + dataDetails);
            return ({
                label: dataDetails.title,
                data: dataDetails.contributions
            });
        })}
        axes={[
            { primary: true, type: "linear", position: "bottom" },
            { type: "linear", position: "left" }
        ]}/>
    );
}
 
export default ChartComponent;