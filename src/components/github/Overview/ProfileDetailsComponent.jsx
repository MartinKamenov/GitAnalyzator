import React from 'react';

const ProfileDetailsComponent = ({data}) => {
    return (
        <div className="details-container">
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
    );
}
 
export default ProfileDetailsComponent;