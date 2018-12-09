import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configurationStore';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);
