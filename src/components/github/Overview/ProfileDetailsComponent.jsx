import React from 'react';
import PropTypes from 'prop-types';
import ChartComponent from '../Chart/ChartComponent';

const ProfileDetailsComponent = ({data}) => {
    const contributionData = [];
    data.dateContributionsNumbers.forEach((c, i) => contributionData.push([i, c]));
    const dataArray = [{
        title: 'Contribution graph', 
        contributions: contributionData
    }];
    return (
        <div className="details-container">
            <div className="details-numbers-container">
                <div className="detail">
                    <span>All </span>
                    <div className="number-detail">{data.totalContributionsCount}</div>
                </div>
                <div className="detail">
                    <span>Conclussive </span>
                    <div className="number-detail">{data.conclussiveContributions}</div>
                </div>
                <div className="detail">
                    <span>Max per day </span>
                    <div className="number-detail">{data.maxContributionsForDay}</div>
                </div>
                <div className="detail">
                    <span>Without </span>
                    <div className="number-detail">{data.daysWithoutContributions}</div>
                </div>
            </div>
            <div className="chart-wrapper">
                <ChartComponent dataArray={dataArray}/>
            </div>
        </div>
    );
}

ProfileDetailsComponent.propTypes = {
    data: PropTypes.shape({
        totalContributionsCount: PropTypes.number.isRequired,
        daysWithoutContributions: PropTypes.number.isRequired,
        conclussiveContributions: PropTypes.number.isRequired,
        maxContributionsForDay: PropTypes.number.isRequired,
        dateContributionsNumbers: PropTypes.array.isRequired
    }).isRequired
};
 
export default ProfileDetailsComponent;