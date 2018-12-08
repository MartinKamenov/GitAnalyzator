import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const GithubPage = ({profile}) => {
    return ( 
        <div>
            <h2>Profile Page</h2>
            <div>{profile.username}</div>
            <div>
                {
                    (() => {
                        if(profile.data) {
                            return (
                                <span>Contributions this year: 
                                { profile.data.totalContributionsCount }
                                </span>
                            );
                        }
                    })()
                }
            </div>
        </div>
    );
}

GithubPage.propTypes = {
    profile: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile
    };
};
 
export default connect(mapStateToProps)(GithubPage);