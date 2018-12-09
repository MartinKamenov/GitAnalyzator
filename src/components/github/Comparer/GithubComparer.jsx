import React from 'react';
const GithubComparer = ({firtsUsername, secondUsername, handleChangeUsername, handleCompareProfiles}) => (
    <div>
        <div>
            <h2>Compare github profiles</h2>
        </div>
        <input type="text"
        value={firtsUsername}
        onChange={(ev) => handleChangeUsername(ev, 'firstUsername')}
        placeholder="First github profile"
        className="form-input" />
        <input type="text" 
        value={secondUsername}
        onChange={(ev) => handleChangeUsername(ev, 'secondUsername')}
        placeholder="Second github profile"
        className="form-input" />
        <button type="submit" onClick={handleCompareProfiles} className="btn btn-success">Analyze</button>
    </div>
);
 
export default GithubComparer;