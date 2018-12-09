import React, { Component } from 'react';
import GithubAnalyzer from './Analyzer/GithubAnalyzer';
import GithubComparer from './Comparer/GithubComparer';
import GithubProfile from './Profile/GithubProfile';
import TabType from '../contracts/TabType';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../actions/githubActions';
import './github.css';

class GithubStartPage extends Component {
    state = {
        username: '',
        firstUsername: '',
        secondUsername: '',
        tab: TabType.Analyzer,
        tabs: [
            { type: TabType.Analyzer },
            { type: TabType.Comparer }
        ]
    }

    showProfileTab() {
        if(this.state.tabs.includes(t => t.type === TabType.Profile)) {
            return;
        }
        const tabs = this.state.tabs;
        tabs.push({ type: TabType.Profile });
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
        console.log(field);
        const usernameInputText = event.target.value;
        const newState = {};
        newState[field] = usernameInputText;
        this.setState(newState);
    }
    handleGetProfile = () => {
        this.showProfileTab();
        const username = this.state.username;
        this.props.actions.getGithubProfile(username);
        this.setState({username: '', tab: TabType.Profile});
    }

    handleCompareProfile = () => {
        alert('handleCompareProfile');
    }
    render() {
        return (
            <div className="container center">
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
                            case TabType.Analyzer:
                                return <GithubAnalyzer
                                username={this.state.username}
                                handleChangeUsername={this.handleChangeUsername}
                                handleGetProfile={this.handleGetProfile}/>;
                            case TabType.Comparer:
                                return <GithubComparer
                                firtsUsername={this.state.firstUsername}
                                secondUsername={this.state.secondUsername}
                                handleChangeUsername={this.handleChangeUsername}
                                handleCompareProfile={this.handleCompareProfiles}
                                />;
                            case TabType.Profile:
                                return <GithubProfile/>;
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
        profile: state.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(GithubStartPage);