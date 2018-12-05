import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configurationStore';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.css';
import { getGithubProfile } from './actions/githubActions';

const store = configureStore();
store.dispatch(getGithubProfile('martinkamenov'));

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);
