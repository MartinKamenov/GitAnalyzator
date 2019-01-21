import React from 'react';
import GithubContributionsDetails from '../Common/GihubContributionsDetails';
import PropTypes from 'prop-types';

const FullProfileContributions = ({ profile }) => (
    <GithubContributionsDetails profile={profile}/>
);

FullProfileContributions.propTypes = {
    profile: PropTypes.object.isRequired
};
 
export default FullProfileContributions;