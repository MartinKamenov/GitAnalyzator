import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GithubProfileComparer = ({ profiles }) => {
    return ( 
        <div>
            <h2>Profiles comparer</h2>
            <div>{
                (() => {
                    if(profiles.length) {
                        return <div>{profiles.length}</div>;
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