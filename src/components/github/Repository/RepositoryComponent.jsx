import React, { Component } from 'react';
import * as githubActions from '../../../actions/githubActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RepositoryComponent extends Component {
    componentDidMount() {
        const username = this.props.match.params.username;
        const repositoryName = this.props.match.params.repositoryname;
        this.getRepository(username, repositoryName);
    }
    getRepository(username, repositoryName) {
        this.props.actions.getGithubRepository(username, repositoryName);
    }
    render() {
        if(this.props.repository) {
            return <div>{this.props.repository.username}</div>
        }
        return (
            <div>RepositoryComponent</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repository: state.repository
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryComponent);