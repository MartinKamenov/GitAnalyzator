import React, { Component } from 'react';
import { CompareTabType } from '../contracts/TabType';
import GithubComparer from './Comparer/GithubComparer';
import GithubProfileComparer from './ProfileComparer/GithubProfileComparer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../../actions/githubActions';
import './github.css';

class GithubComparePage extends Component {
    state = {
        firstUsername: '',
        secondUsername: '',
        tab: CompareTabType.Comparer,
        tabs: [
            { type: CompareTabType.Comparer }
        ],
        year: 2018,
        yearHasChanged: false
    }

    showCompareTab() {
        if(!(this.state.tabs.filter((t) => t.type === CompareTabType.ProfileComparer).length === 0)) {
            return;
        }
        const tabs = this.state.tabs;
        tabs.push({ type: CompareTabType.ProfileComparer });
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

    handleCompareProfiles = () => {
        this.showCompareTab();
        const firstUsername = this.state.firstUsername;
        const secondtUsername = this.state.secondUsername;
        if(this.state.yearHasChanged) {
            const year = this.state.year;
            this.props.actions.getCompareGithubProfiles(firstUsername, secondtUsername, year);
        } else {  
            this.props.actions.getCompareGithubProfiles(firstUsername, secondtUsername);
        }
        this.setState({
            firstUsername: '', 
            secondUsername: '', 
            tab: CompareTabType.ProfileComparer,
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
                            case CompareTabType.Comparer:
                                return <GithubComparer
                                handleClassYear={this.handleClassYear}
                                handleSelectedYear={this.handleSelectedYear}
                                firtsUsername={this.state.firstUsername}
                                secondUsername={this.state.secondUsername}
                                handleChangeUsername={this.handleChangeUsername}
                                handleCompareProfiles={this.handleCompareProfiles}
                                />;
                            case CompareTabType.ProfileComparer:
                                return <GithubProfileComparer/>;
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
}

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
 
export default connect(mapStateToProps, mapDispatchToProps)(GithubComparePage);