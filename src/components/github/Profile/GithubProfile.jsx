import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChartComponent from '../Chart/ChartComponent';

const GithubPage = ({profile}) => {
    return ( 
        <div>
        {
            (() => {
                if(profile.data) {
                    const data = [];
                    profile.data.dateContributionsNumbers.forEach((c, i) => data.push([i, c]));
                    const dataArray = [{
                        title: profile.username, 
                        contributions: data,
                        classColor: 'first-profile-legend'
                    }];
                    return (
                        <div className="contribution-chart">
                            <h2>Profile Page</h2>
                            <div>Username: {profile.username}</div>
                            <div><img
                            className="profile-image"
                            alt={profile.username}
                            src={profile.data.pictureUrl}>
                            </img></div>
                            <div>Contributions this year:
                            { profile.data.totalContributionsCount }
                            </div>
                            <div>Days without contributions:
                            { profile.data.daysWithoutContributions }
                            </div>
                            <div>Conclussive days with contributions:
                            { profile.data.conclussiveContributions }
                            </div>
                            <div>Maximal contributions per day:
                            { profile.data.maxContributionsForDay }
                            </div>
                            <ChartComponent dataArray={dataArray}/>
                        </div>
                    );
                } else {
                    return (
                        <div>Fetching data...</div>
                    );
                }
            })()
        }
        </div>
    );
}

GithubPage.propTypes = {
    profile: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile
    };
};
 
export default connect(mapStateToProps)(GithubPage);