import React from 'react';

const GithubAnalyzer = ({username, handleChangeUsername, handleGetProfile}) => ( 
    <div>
        <div>
            <h2>Analyze github profile</h2>
        </div>
        <div>
            <input
            value={username}
            onChange={(ev) => handleChangeUsername(ev)}
            type="text" 
            placeholder="Github profile"
            className="form-input" />
            <button type="submit" onClick={handleGetProfile} className="btn btn-success">Analyze</button>
        </div>
    </div>
);
 
export default GithubAnalyzer;