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
                <div>
                    <div>{'Commits: '} 
                        <span className='commits-counter'>{contributor.contributions}</span></div>
                    <div>{'Additions: '} 
                        <span className='additions-counter'>{contributor.additions}</span></div>
                    <div>{'Deletions: '}
                        <span className='deletions-counter'>{contributor.deletions}</span></div>
                </div>
            </div>
        </Link>
    })}</div>
);

RepositoryContributorsListComponent.propTypes = {
    contributors: PropTypes.array
};
 
export default RepositoryContributorsListComponent;