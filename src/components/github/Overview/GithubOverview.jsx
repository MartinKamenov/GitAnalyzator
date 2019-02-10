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
        currentPage: 1,
        searchUsername: '',
        sortBy: 'totalContributionsCount',
        languages: [],
        queryParam: {},
        isSearched: false
    }
    componentDidMount() {
        const queryObject = queryString.parse(this.props.location.search);
        const pageString = queryObject.page;
        const queryParam = {};
        if(queryObject.username) {
            this.setState({username: queryObject.username});
            queryParam.username = queryObject.username;
        }

        if(queryObject.language) {
            this.setState({ languages: queryObject.language.split('|') });
            queryParam.language = queryObject.language.split('|');
        }

        const sortBy = queryObject.sortBy ? queryObject.sortBy : this.state.sortBy;
        this.setState({ sortBy });
        queryParam.sortBy = sortBy;

        let page = parseInt(pageString, 10);
        if(!page) {
            page = 1;
        }
        queryParam.page = page;
        this.setState({ queryParam });

        this.props.actions.getGithubUsers(page, queryParam);
    }

    componentWillReceiveProps(props) {
        this.addPagesToState(props.users);
    }

    addPagesToState(usersObject) {
        let pages = [];
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

        if(!pages.includes(1)) {
            pages.push(1);
        }

        if(!pages.includes(pagesCount)) {
            pages.push(pagesCount);
        }

        pages = pages.sort((a, b) => a - b);

        if(!this.state.isSearched && this.state.currentPage === page) {
            return;
        }

        this.setState({ pages, page, currentPage: page, isLoading: false });
    }

    addQueryParams = (queryParam) => {
        this.props.history.push({
            pathname: '/overview',
            search: "?" + new URLSearchParams(queryParam).toString()
        });
    }

    onPageChangeHandler = (page) => {
        this.setState({ page, isLoading: true, isSearched: false });
        let searchParams = null;
        if(this.state.searchUsername) {
            searchParams.username = this.state.searchUsername;
        }

        const sortBy = this.state.sortBy;
        const sortParams = { sortBy };
        this.props.actions.getGithubUsers(page, searchParams, sortParams);
    }

    onSortByChanged = (evt) => {
        const sortBy = evt.target.value;
        this.setState({sortBy});
    }

    onSearchUsernameChanged = (evt) => {
        const searchUsername = evt.target.value.toLowerCase();
        this.setState({ searchUsername });
    }

    onSearchHandler = () => {
        const queryParam = {};
        if(this.state.searchUsername) {
            queryParam.username = this.state.searchUsername;
        }

        if(this.state.languages.length > 0) {
            queryParam.languages = this.state.languages;
        }

        queryParam.sortBy = this.state.sortBy;

        const page = 1;
        this.props.actions.getGithubUsers(page, queryParam);
        this.setState({ isLoading: true, isSearched: true });

        //this.addQueryParams();
    }

    onLanguageChanged = (language) => {
        const languages = this.state.languages;
        if(languages.includes(language)) {
            var index = languages.indexOf(language);
            if (index > -1) {
                languages.splice(index, 1);
            }
        } else {
            languages.push(language);
        }
        this.setState({ languages });
    }

    render() {
        return (
            <div className="wrapper container center">
                <div className="header">
                    <SearchComponent
                    onSortByChanged={this.onSortByChanged}
                    onSearchUsernameChanged={this.onSearchUsernameChanged}
                    onSearchHandler={this.onSearchHandler}
                    onLanguageChanged={this.onLanguageChanged}
                    selectedLanguages={this.state.languages}/>
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