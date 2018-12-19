import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile
    };
};
 
export default connect(mapStateToProps)(GithubRepositoriesProfile);