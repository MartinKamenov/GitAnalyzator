import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepositoryContributorsListComponent = ({contributors}) => (
    <div className='row'>{contributors.map((contributor, i) => {
        return <Link to={'/profile/' + contributor.name}
            key={i} className='repository-contributor-link col-md-4'>
            <div className='repository-contributor-wrapper'>
                <h3 style={{fontWeight: 'bold'}}>{contributor.name}</h3>
                <img className="profile-image-small"
                    alt={contributor.name.substring(0, 25)}
                    src={contributor.imageSrc}/>
                <div className='contributions-wrapper' style={{width: '50%', margin: 'auto'}}>
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