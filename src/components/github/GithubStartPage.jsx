import React, { Component } from 'react';
import GithubAnalyzer from './Analyzer/GithubAnalyzer';
import GithubComparer from './Comparer/GithubComparer';
import GithubProfile from './Profile/GithubProfile';
import TabType from '../contracts/TabType';
import './github.css';

class GithubStartPage extends Component {
    state = {
        tab: TabType.Analyzer
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
    render() {
        return (
            <div className="container center">
                <ul id="tabs">
                    <li className={this.getTabClasses(TabType.Analyzer)} onClick={() => this.handleChangeTab(TabType.Analyzer)}>
                        <span id="AnalyzerTab">Analyzer</span>
                    </li>
                    <li className={this.getTabClasses(TabType.Comparer)} onClick={() => this.handleChangeTab(TabType.Comparer)}>
                        <span id="ComparerTab">Comparer</span>
                    </li>
                    <li className={this.getTabClasses(TabType.Profile)} onClick={() => this.handleChangeTab(TabType.Profile)}>
                        <span id="ProfileTab">Profile</span>
                    </li>
                </ul>
                <div className={this.getTabContainerClasses(TabType.Analyzer)} id="AnalyzerContainer">
                    <GithubAnalyzer/>
                </div>
                <div className={this.getTabContainerClasses(TabType.Comparer)} id="ComparerContainer">
                    <GithubComparer/>
                </div>
            </div>
        );
    }
};
 
export default GithubStartPage;