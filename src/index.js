import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configurationStore';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);
