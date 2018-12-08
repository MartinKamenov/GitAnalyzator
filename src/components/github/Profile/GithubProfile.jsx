import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const GithubPage = ({profile}) => {
    return ( 
        <div>
            <h2>Profile Page</h2>
            <div>{profile.username}</div>
        </div>
    );
}

GithubPage.propTypes = {
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile
    };
};
 
export default connect(mapStateToProps)(GithubPage);