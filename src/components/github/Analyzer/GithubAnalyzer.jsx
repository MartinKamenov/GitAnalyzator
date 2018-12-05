import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../../actions/githubActions';

/*<div>
                    <h2>Analyze github profile</h2>
                </div>
                <form>
                    <input type="text" 
                    placeholder="Github profile"
                    className="form-input" />
                    <button type="submit" onSubmit={() => this.submit()} className="btn btn-success">Analyze</button>
                </form>*/
class GithubAnalyzer extends Component {
    render() {
        return ( 
            <div>
                Profile: { this.props.profile }
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