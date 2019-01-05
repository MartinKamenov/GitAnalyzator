import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../../actions/githubActions';
import ProfilesContainer from './ProfilesContainer';
import './css/overview.css';

class GithubOverview extends Component {
    componentDidMount() {
        this.props.actions.getGithubUsers();
    }
    render() {
        return (
            <div className="wrapper container center">
                <div className="header">
                    <h1>Searched github profiles</h1>
                    {(() => {
                        if(!this.props.users.length) {
                            return <div>Loading...</div>;
                        } else {
                            return <ProfilesContainer profiles={this.props.users}/>;
                        }
                    })()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(GithubOverview);