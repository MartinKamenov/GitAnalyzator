import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const GithubContributionsDetails = ({ profile }) => {
    return ( 
        <Fragment>
            <div><img
            className="profile-image"
            alt={profile.username}
            src={profile.data.pictureUrl}>
            </img></div>
            <div>
            { profile.data.totalContributionsCount } contributions this year
            </div>
            <div>
            { profile.data.daysWithoutContributions } days without contributions
            </div>
            <div>
            { profile.data.conclussiveContributions } conclussive days with contributions
            </div>
            <div>
            { profile.data.maxContributionsForDay } max contributions in one day
            </div>
        </Fragment>
    );
}

GithubContributionsDetails.propTypes = {
    profile: PropTypes.shape({
        username: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired
    }).isRequired
};

export default GithubContributionsDetails;