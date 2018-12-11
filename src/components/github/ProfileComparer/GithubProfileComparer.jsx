import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GithubProfileComparer = ({ profiles }) => {
    const elements = profiles.map((profile) => {
        const data = profile.data;
        return (
        <div className="col-md-6">
            <div><img
                className="profile-image"
                alt={profile.username}
                src={data.pictureUrl}>
            </img></div>
            <div>{data.totalContributionsCount} contributions this year</div>
        </div>
        );
    });
    return ( 
        <div>
            <h2>Profiles comparer</h2>
            <div>{
                (() => {
                    if(profiles.length) {
                        return (
                            <div className="contribution-chart">
                                <h2>Profile Comparer</h2>
                                <div>
                                    <h3 className="username-header">{profiles[0].username}</h3> vs <h3 className="username-header">{profiles[1].username}</h3>
                                </div>
                                <div className="row">
                                    {elements.map((profile) => profile)}
                                </div>
                            </div>
                        );
                    } else {
                        return <div>Fetching data...</div>;
                    }
                })()
            }</div>
        </div>
    );
}

GithubProfileComparer.propTypes = {
    profiles: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        profiles: state.profiles
    };
};

export default connect(mapStateToProps)(GithubProfileComparer);