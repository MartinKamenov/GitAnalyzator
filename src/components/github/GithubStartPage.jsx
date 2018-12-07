import React, { Component } from 'react';
import GithubAnalyzer from './Analyzer/GithubAnalyzer';
import GithubComparer from './Comparer/GithubComparer';
import GithubProfile from './Profile/GithubProfile';
import TabType from '../contracts/TabType';
import './github.css';

class GithubStartPage extends Component {
    state = {
        tab: TabType.Analyzer,
        tabs: [
            { type: TabType.Analyzer },
            { type: TabType.Comparer },
            { type: TabType.Profile }
        ]
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
                                return <GithubAnalyzer/>;
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
 
export default GithubStartPage;