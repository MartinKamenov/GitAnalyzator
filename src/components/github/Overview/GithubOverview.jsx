import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../../actions/githubActions';
import ProfilesContainer from './ProfilesContainer';
import './css/overview.css';
import PagingComponent from '../Common/paging/PagingComponent';

class GithubOverview extends Component {
    componentDidMount() {
        this.props.actions.getGithubUsers();
    }

    componentWillReceiveProps(props) {
        this.addPagesToState(props.users);
    }

    addPagesToState(usersObject) {
        const pages = [];
        for(let i = 0; i < usersObject.pagesCount; i++) {
            pages.push(i + 1);
        }

        this.setState({ pages });
    }
    render() {
        console.log(this.props.users);
        debugger;
        return (
            <div className="wrapper container center">
                <div className="header">
                    <h1>Searched github profiles</h1>
                    {(() => {
                        if(!this.props.users) {
                            return <div>Loading...</div>;
                        } else {
                            return (
                                <div>
                                    <ProfilesContainer profiles={this.props.users.users}/>
                                    <PagingComponent pages={this.state.pages}/>
                                </div>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(GithubOverview);