import * as React from 'react';

import {App} from "./App";
import {Router} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {createBrowserHistory} from 'history';
import {config} from "../../config";
import { rootReducer}  from '../../state/rootReducer';
import {getInitialState} from "../../state/initialState";

const history = createBrowserHistory({basename: config.routerBaseUrl});

const store = createStore(rootReducer, getInitialState());

export const AppContainer = () => {
    return (
        <Router history={history}>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    );
};