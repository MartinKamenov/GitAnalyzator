import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../../actions/githubActions';
import ProfilesContainer from './ProfilesContainer';
import './css/overview.css';
import PagingComponent from '../Common/paging/PagingComponent';
import queryString from 'query-string'
import LoaderComponent from '../Common/Loader';
import SearchComponent from '../Common/searching/SearchComponent';

class GithubOverview extends Component {
    state = {
        isLoading: true,
        currentPage: 0,
        searchUsername: '',
        sortBy: 'totalContributionsCount'
    }
    componentDidMount() {
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
        let startPage = page > 1 ? page - 1 : 1;
        let endPage = page < pagesCount ? page + 1 : pagesCount;
        if(startPage === 1 && pagesCount > 2) {
            endPage = 3;
        }
        
        if(page === pagesCount && startPage > 1) {
            startPage--;
        }

        for(let i = startPage; i < endPage + 1; i++) {
            pages.push(i);
        }

        if(this.state.currentPage === page) {
            return;
        }

        this.setState({ pages, page, currentPage: page, isLoading: false });
    }

    onPageChangeHandler = (page) => {
        this.setState({page, isLoading: true});
        this.props.actions.getGithubUsers(page);
    }

    onSortByChanged = (evt) => {
        const sortBy = evt.target.value;
        this.setState({sortBy});
    }

    onSearchUsernameChanged = (evt) => {
        const searchUsername = evt.target.value.toLowerCase();
        this.setState({searchUsername});
    }

    onSearchHandler = () => {
        debugger;
        let searchParams = null;
        if(this.state.searchUsername) {
            searchParams = { username: this.state.searchUsername };
        }
        const sortParams = { sortBy: this.state.sortBy };
        this.props.actions.getGithubUsers(1, searchParams, sortParams);
    }


    render() {
        return (
            <div className="wrapper container center">
                <div className="header">
                    <SearchComponent
                    onSortByChanged={this.onSortByChanged}
                    onSearchUsernameChanged={this.onSearchUsernameChanged}
                    onSearchHandler={this.onSearchHandler}/>
                    {(() => {
                        if(this.state.isLoading) {
                            return <LoaderComponent/>;
                        } else {
                            return (
                                <div>
                                    <ProfilesContainer
                                    profiles={this.props.users.users}/>
                                    <PagingComponent
                                        currentPage={this.state.page}
                                        onPageChangeHandler={this.onPageChangeHandler}
                                        pages={this.state.pages}/>
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