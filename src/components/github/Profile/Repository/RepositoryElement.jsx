import React from 'react';

const RepositoryElement = ({repo}) => {
    return (
        <div>
            <div>{repo.name}</div>
            <div>{repo.programmingLanguage}</div>
        </div>
    );
}
 
export default RepositoryElement;