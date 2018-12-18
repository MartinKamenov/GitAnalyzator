import React from 'react';
import PropTypes from 'prop-types';

const GithubAnalyzerRepositories = ({ username, handleChangeUsername, handleGetProfileRepositories }) => {
    return ( 
        <div>
            <div>
                <h2>Analyze github profile</h2>
            </div>
            <div>
                <input
                value={username}
                onChange={(ev) => handleChangeUsername(ev, 'username')}
                type="text" 
                placeholder="Github profile"
                className="form-input" />
                <button type="submit" onClick={handleGetProfileRepositories}
                className="btn btn-success">Analyze</button>
            </div>
        </div>
    );
}

GithubAnalyzerRepositories.propTypes = {
    username: PropTypes.string.isRequired,
    handleChangeUsername: PropTypes.func.isRequired,
    handleGetProfileRepositories: PropTypes.func.isRequired
};
 
export default GithubAnalyzerRepositories;