import React from 'react';
import PropTypes from 'prop-types';

const GithubPage = ({ profile }) => {
    return ( 
        <div>{profile.username}</div>
    );
}

GithubPage.propTypes = {
    profile: PropTypes.object.isRequired
};
 
export default GithubPage;

/*import React, { Component } from 'react';
// import PropTypes from 'prop-types';
class GithubPage extends Component {
    render() { 
        return ( 
            <div>User: {this.props.profile.username}</div>
        );
    }
}
 
export default GithubPage;*/