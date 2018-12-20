import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepositoryList from './Repository/RepositoryList';

const GithubRepositoriesProfile = ({profile}) => {
    return ( 
        <div>
            <h2>Profile Repository Page</h2>
            {
                (() => {
                    if(profile.data) {
                        return (
                            <div>
                                <div className="user-link">
                                    <h2>
                                        <a href={"https://github.com/" + profile.username}>
                                            <span>{profile.username}</span>
                                        </a>
                                    </h2>
                                </div>
                                <div>
                                    <h2>Found repositories</h2>
                                    <RepositoryList repositories={profile.data.repositoriesInfo}/>
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