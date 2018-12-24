import React from 'react';
import PropTypes from 'prop-types';
import GithubYearSelector from '../Common/GithubYearSelector';

const GithubComparer = ({
    firtsUsername, 
    secondUsername, 
    handleChangeUsername, 
    handleCompareProfiles,
    handleClassYear,
    handleSelectedYear}) => (
    <div>
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
            <button type="submit" onClick={handleCompareProfiles} className="send-button">Compare</button>
        </div>
        <div className="sidebar hidden-sm hidden-xs">
            <GithubYearSelector 
                handleClassYear={handleClassYear}
                handleSelectedYear={handleSelectedYear}/>
        </div>
    </div>
);

GithubComparer.propTypes = {
    firtsUsername: PropTypes.string.isRequired, 
    secondUsername: PropTypes.string.isRequired, 
    handleChangeUsername: PropTypes.func.isRequired, 
    handleCompareProfiles: PropTypes.func.isRequired,
    handleClassYear: PropTypes.func.isRequired,
    handleSelectedYear: PropTypes.func.isRequired
};
 
export default GithubComparer;