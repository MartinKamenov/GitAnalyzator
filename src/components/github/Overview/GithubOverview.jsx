import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../../actions/githubActions';

class GithubOverview extends Component {
    state = {  }
    render() { 
        return (
            <div className="wrapper container center">
                <div className="header">
                    <h1>Searched github profiles</h1>
                    {(() => {
                        if(!this.props.users) {
                            return <div>Loading...</div>
                        } else {
                            
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