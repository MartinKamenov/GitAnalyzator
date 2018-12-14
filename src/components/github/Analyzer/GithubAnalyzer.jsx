import React from 'react';
import PropTypes from 'prop-types';
import GithubYearSelector from '../Common/GithubYearSelector';

const GithubAnalyzer = ({username,
    handleChangeUsername,
    handleGetProfile,
    handleSelectedYear,
    handleClassYear}) => (
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
            <button type="submit" onClick={handleGetProfile}
            className="btn btn-success">Analyze</button>
        </div>
        <div>
            <GithubYearSelector 
            handleClassYear = {handleClassYear}
            handleSelectedYear={handleSelectedYear}/>
        </div>
    </div>
);

GithubAnalyzer.propTypes = {
    username: PropTypes.string.isRequired,
    handleChangeUsername: PropTypes.func.isRequired,
    handleGetProfile: PropTypes.func.isRequired,
    handleSelectedYear: PropTypes.func.isRequired,
    handleClassYear: PropTypes.func.isRequired
};
 
export default GithubAnalyzer;