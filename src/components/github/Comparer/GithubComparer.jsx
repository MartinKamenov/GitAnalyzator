import React from 'react';
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
            <button type="submit" onClick={handleCompareProfiles} className="btn btn-success">Compare</button>
        </div>
        <div className="sidebar">
            <GithubYearSelector 
                handleClassYear = {handleClassYear}
                handleSelectedYear={handleSelectedYear}/>
        </div>
    </div>
);
 
export default GithubComparer;