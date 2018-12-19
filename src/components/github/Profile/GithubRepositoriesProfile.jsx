import React from 'react';
import PropTypes from 'prop-types';

const GithubRepositoriesProfile = ({profile}) => {
    return ( 
        <div>
            <h2>Profile Repository Page</h2>
            {
                (() => {
                    if(profile.data) {
                        return (
                            <div>
                                <div>Username: {profile.username}</div>
                                <div>
                                    <h2>Found repositories</h2>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div>Fetching data...</div>
                        );
                    }
                })()
        }
        </div>
    );
}

GithubRepositoriesProfile.propTypes = {
    profile: PropTypes.object.isRequired
};
 
export default GithubRepositoriesProfile;