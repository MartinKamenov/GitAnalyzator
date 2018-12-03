import React from 'react';
import GithubAnalyzer from './Analyzer/GithubAnalyzer';
import GithubComparer from './Comparer/GithubComparer';

const GithubStartPage = () => ( 
    <div className="container">
        <ul id="tabs">
            <li><a id="AnalyzerTab">Analyzer</a></li>
            <li><a id="ComparerTab">Comparer</a></li>
        </ul>
        <div class="container" id="AnalyzerContainer">
            <GithubAnalyzer/>
        </div>
        <div class="container" id="ComparerContainer">
            <GithubComparer/>
        </div>
    </div>
);
 
export default GithubStartPage;