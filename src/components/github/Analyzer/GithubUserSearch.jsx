import React from 'react';
import PropTypes from 'prop-types';
import GithubYearSelector from '../Common/GithubYearSelector';

const GithubUserSearch = ({username,
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
                className="send-button">Analyze</button>
        </div>
        <div className="sidebar hidden-sm hidden-xs">
            <GithubYearSelector
                handleClassYear={handleClassYear}
                handleSelectedYear={handleSelectedYear}/>
        </div>
    </div>
);

GithubUserSearch.propTypes = {
    username: PropTypes.string.isRequired,
    handleChangeUsername: PropTypes.func.isRequired,
    handleGetProfile: PropTypes.func.isRequired,
    handleSelectedYear: PropTypes.func.isRequired,
    handleClassYear: PropTypes.func.isRequired
};
 
export default GithubUserSearch;