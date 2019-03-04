import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ChartComponent from '../Chart/ChartComponent';
import NumberDetailTypes from '../../contracts/NumberDetailTypes';

class ProfileDetailsComponent extends PureComponent {
    getDetailClass(field, value) {
        let className = 'number-detail ';
        switch(field) {
        case 'totalContributionsCount':
            if(value < 500) {
                className += NumberDetailTypes.default;
            } else if(value < 1000) {
                className += NumberDetailTypes.bronze;
            } else if(value < 2000) {
                className += NumberDetailTypes.silver;
            } else {
                className += NumberDetailTypes.gold;
            }
            break;
        case 'conclussiveContributions':
            if(value < 30) {
                className += NumberDetailTypes.default;
            } else if(value < 75) {
                className += NumberDetailTypes.bronze;
            } else if(value < 150) {
                className += NumberDetailTypes.silver;
            } else {
                className += NumberDetailTypes.gold;
            }
            break;
        case 'maxContributionsForDay':
            if(value < 25) {
                className += NumberDetailTypes.default;
            } else if(value < 50) {
                className += NumberDetailTypes.bronze;
            } else if(value < 100) {
                className += NumberDetailTypes.silver;
            } else {
                className += NumberDetailTypes.gold;
            }
            break;
        case 'daysWithoutContributions':
            if(value < 100) {
                className += NumberDetailTypes.gold;
            } else if(value < 200) {
                className += NumberDetailTypes.silver;
            } else if(value < 300) {
                className += NumberDetailTypes.bronze;
            } else {
                className += NumberDetailTypes.default;
            }
            break;
        default:
            break;
        }
        return className;
    }
    render() {
        const data = this.props.data;
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
                        <div className={this.getDetailClass('totalContributionsCount', data.totalContributionsCount)}>
                            {data.totalContributionsCount}
                        </div>
                    </div>
                    <div className="detail">
                        <span>Conclussive </span>
                        <div className={this.getDetailClass('conclussiveContributions', data.conclussiveContributions)}>
                            {data.conclussiveContributions}
                        </div>
                    </div>
                    <div className="detail">
                        <span>Max per day </span>
                        <div className={this.getDetailClass('maxContributionsForDay', data.maxContributionsForDay)}>
                            {data.maxContributionsForDay}
                        </div>
                    </div>
                    <div className="detail">
                        <span>Without </span>
                        <div className={this.getDetailClass('daysWithoutContributions', data.daysWithoutContributions)}>
                            {data.daysWithoutContributions}
                        </div>
                    </div>
                </div>
                <div className="chart-wrapper">
                    <ChartComponent dataArray={dataArray}/>
                </div>
            </div>
        );
    }
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