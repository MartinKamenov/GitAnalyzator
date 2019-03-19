import React, { Component } from 'react';
import GithubAnalyzer from './Analyzer/GithubAnalyzer';
import GithubProfile from './Profile/GithubProfile';
import GithubRepositoriesProfile from './Profile/GithubRepositoriesProfile';
import { AnalyzeTabType } from '../contracts/TabType';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../actions/githubActions';
import './github.css';
import GithubAnalyzerRepositories from './Analyzer/GithubAnalyzerRepositories';

class GithubStartPage extends Component {
    state = {
        username: '',
        tab: AnalyzeTabType.Analyzer,
        tabs: [
            { type: AnalyzeTabType.Analyzer }
        ],
        year: 2018,
        yearHasChanged: false
    }

    showProfileTab() {
        this.showTab(AnalyzeTabType.Profile);
    }

    showProfileContributionsTab() {
        this.showTab(AnalyzeTabType.RepositoriesProfile);
    }

    showTab(tabName) {
        if(!(this.state.tabs.filter((t) => t.type === tabName).length === 0)) {
            return;
        }
        const tabs = this.state.tabs;
        tabs.push({ type: tabName });

        this.setState({tabs});
    }

    handleChangeTab = (tabId) => {
        if(this.state.tab !== tabId) {
            this.setState({tab: tabId});
        }
    }

    getTabClasses = (tabId) => {
        let classes = 'tab ';
        if(tabId !== this.state.tab) {
            classes += 'inactive'; 
        } else {
            classes += 'active';
        }

        return classes;
    }

    getTabContainerClasses = (containerId) => {
        let classes = 'container tab-container ';
        if(containerId !== this.state.tab) {
            classes += 'hidden';
        }

        return classes;
    }

    handleChangeUsername = (event, field) => {
        const usernameInputText = event.target.value;
        const newState = {};
        newState[field] = usernameInputText;
        this.setState(newState);
    }
    handleGetProfile = () => {
        this.showProfileTab();
        const username = this.state.username;
        if(this.state.yearHasChanged) {
            this.props.actions.getGithubProfile(username, this.state.year);
        } else {
            this.props.actions.getGithubProfile(username);
        }
        this.setState({
            username: '', 
            tab: AnalyzeTabType.Profile,
            year: 2018, 
            yearHasChanged: false
        });
    }

    handleGetProfileRepositories = () => {
        this.showProfileContributionsTab();
        const username = this.state.username;
        this.props.actions.getGithubProfileRepositories(username);
        this.setState({
            username: '', 
            tab: AnalyzeTabType.RepositoriesProfile, 
            year: 2018, 
            yearHasChanged: false
        });
    }
    
    handleClassYear = (year) => {
        let className = "year-btn";
        if(year === this.state.year && this.state.yearHasChanged) {
            className += " active";
        }
        
        return className;
    }
    handleSelectedYear = (year) => {
        this.setState({ year, yearHasChanged: true });
    }
    render() {
        return (
            <div className="wrapper container center">
                <ul id="tabs">
                {this.state.tabs.map((tab) => {
                    return (
                    <li
                    key={tab.type + 'TabKey'}
                    className={this.getTabClasses(tab.type)} onClick={() => this.handleChangeTab(tab.type)}>
                        <span id="AnalyzerTab">{tab.type}</span>
                    </li>
                    );
                })}
                </ul>
                {this.state.tabs.map((tab) => {
                    return (
                    <div
                    key={tab.type + 'ContainerKey'}
                    className={this.getTabContainerClasses(tab.type)} id={tab.type + 'Container'}>
                        {(() => {
                            switch(tab.type) {
                            case AnalyzeTabType.Analyzer:
                                return <GithubAnalyzer
                                handleClassYear={this.handleClassYear}
                                handleSelectedYear={this.handleSelectedYear}
                                username={this.state.username}
                                handleChangeUsername={this.handleChangeUsername}
                                handleGetProfile={this.handleGetProfile}/>;
                            case AnalyzeTabType.AnalyzeRepositories:
                                return <GithubAnalyzerRepositories
                                    username={this.state.username}
                                    handleChangeUsername={this.handleChangeUsername}
                                    handleGetProfileRepositories={this.handleGetProfileRepositories}/>;
                            case AnalyzeTabType.Profile:
                                return <GithubProfile/>;
                            case AnalyzeTabType.RepositoriesProfile:
                                return <GithubRepositoriesProfile/>;
                            default:
                                return null;
                            }
                        })()}
                    </div>
                    );
                })}
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile,
        profiles: state.profiles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(GithubStartPage);