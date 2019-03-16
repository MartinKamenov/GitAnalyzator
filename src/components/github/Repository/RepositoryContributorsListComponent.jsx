import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepositoryContributorsListComponent = ({contributors}) => (
    <div>{contributors.map((contributor, i) => {
        return <Link to={'/profile/' + contributor.name}
            key={i} className='repository-contributor-link'>
            <div className='repository-contributor-wrapper'>
                <h4>{contributor.name}</h4>
                <img className="profile-image-small"
                    alt={contributor.name}
                    src={contributor.imageSrc}/>
                <div>
                    <div>Commits: {contributor.contributions}</div>
                    <div>Additions: {contributor.additions}</div>
                    <div>Deletions: {contributor.deletions}</div>
                </div>
            </div>
        </Link>
    })}</div>
);

RepositoryContributorsListComponent.propTypes = {
    contributors: PropTypes.array
};
 
export default RepositoryContributorsListComponent;