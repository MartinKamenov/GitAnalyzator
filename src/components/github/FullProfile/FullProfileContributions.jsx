import React from 'react';
import GithubContributionsDetails from '../Common/GihubContributionsDetails';

const FullProfileContributions = (fullUser) => (
    <GithubContributionsDetails profile={fullUser.profile}/>
);
 
export default FullProfileContributions;