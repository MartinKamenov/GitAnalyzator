import React from 'react';

const RepositoryElement = ({repo}) => {
    return (
        <div className="repo-wrapper">
            <h3>{repo.name}</h3>
            <div>{repo.programmingLanguage}</div>
        </div>
    );
}
 
export default RepositoryElement;