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
        tab: TabType.Analyzer,
        tabs: [
            { type: TabType.Analyzer },
            { type: TabType.Comparer }
        ]
    }

    showProfileTab() {
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

    

    handleChangeUsername = (event) => {
        const usernameInputText = event.target.value;
        this.setState({username: usernameInputText});
    }
    handleGetProfile = () => {
        this.showProfileTab();
        const username = this.state.username;
        this.props.actions.getGithubProfile(username);
        this.setState({tab: TabType.Profile});
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
                                handleChangeUsername={this.handleChangeUsername}
                                handleGetProfile={this.handleGetProfile}/>;
                            case TabType.Comparer:
                                return <GithubComparer/>;
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