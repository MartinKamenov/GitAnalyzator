import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../../actions/githubActions';

class GithubAnalyzer extends Component {
    handleSubmit = () => {
        console.log('submit');
    }
    render() {
        return ( 
            <div>
                <div>
                    <div>{this.props.profile.username}</div>
                    <h2>Analyze github profile</h2>
                </div>
                <div>
                    <input type="text" 
                    placeholder="Github profile"
                    className="form-input" />
                    <button type="submit" onClick={() => this.handleSubmit()} className="btn btn-success">Analyze</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
}

GithubAnalyzer.propTypes = {
    profile: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubAnalyzer);