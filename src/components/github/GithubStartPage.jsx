import React, { Component } from 'react';
import GithubAnalyzer from './Analyzer/GithubAnalyzer';
import GithubComparer from './Comparer/GithubComparer';
import './github.css';

class GithubStartPage extends Component {
    state = {
        tab: 'Analyzer'
    }

    changeTab() {

    }
    render() {
        return (
            <div className="container center">
                <ul id="tabs">
                    <li className="tab"><a id="AnalyzerTab">Analyzer</a></li>
                    <li className="tab"><a id="ComparerTab">Comparer</a></li>
                </ul>
                <div class="container" id="AnalyzerContainer">
                    <GithubAnalyzer/>
                </div>
                <div class="container" id="ComparerContainer">
                    <GithubComparer/>
                </div>
            </div>
        );
    }
};
 
export default GithubStartPage;