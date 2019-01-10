import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../../actions/githubActions';
import ProfilesContainer from './ProfilesContainer';
import './css/overview.css';
import PagingComponent from '../Common/paging/PagingComponent';
import queryString from 'query-string'

class GithubOverview extends Component {
    componentDidMount() {
        console.log(queryString.parse(this.props.location.search));
        const queryObject = queryString.parse(this.props.location.search);
        const pageString = queryObject.page;
        const page = parseInt(pageString, 10);
        this.props.actions.getGithubUsers(page);
    }

    componentWillReceiveProps(props) {
        this.addPagesToState(props.users);
    }

    addPagesToState(usersObject) {
        const pages = [];
        const page = usersObject.page;
        const pagesCount = usersObject.pagesCount;
        const startPage = page > 1 ? page - 1 : 1;
        const endPage = page < pagesCount ? page + 1 : pagesCount;
        for(let i = startPage; i < endPage + 1; i++) {
            pages.push(i);
        }

        this.setState({ pages, page });
    }

    onPageChangeHandler = (page) => {
        this.setState({page});
        this.props.actions.getGithubUsers(page);
    }
    render() {
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
                                    <PagingComponent onPageChangeHandler={this.onPageChangeHandler} pages={this.state.pages}/>
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