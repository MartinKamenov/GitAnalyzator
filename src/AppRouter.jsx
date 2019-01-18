import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar';
import GithubStartPage from './components/github/GithubStartPage';
import GithubComparePage from './components/github/GithubComparePage';
import HomePage from './components/home/HomePage';
import FooterComponent from './components/navbar/Footer';
import GithubOverview from './components/github/Overview/GithubOverview';
import FullProfileComponent from './components/github/FullProfile/FullProfileComponent';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavigationBar/>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/analyze" component={GithubStartPage} />
                    <Route path="/compare" component={GithubComparePage} />
                    <Route path="/overview" component={GithubOverview} />
                    <Route path="/profile(/:username)" component={FullProfileComponent} />
                </div>
                <FooterComponent/>
            </div>
        </Router>    
    );
};
 
export default AppRouter;