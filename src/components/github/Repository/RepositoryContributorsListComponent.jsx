import React from 'react';
import PropTypes from 'prop-types';

const RepositoryContributorsListComponent = ({contributors}) => (
    <div>{contributors.map((contributor, i) => {
        return <div key={i}>
            <h4>{contributor.name}</h4>
            <img className="profile-image-small"
                alt={contributor.name}
                src={contributor.imageSrc}/>
        </div>
    })}</div>
);

RepositoryContributorsListComponent.propTypes = {
    contributors: PropTypes.array
};
 
export default RepositoryContributorsListComponent;