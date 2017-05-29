import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from './store/';
import Main from './main';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Main />
    </Provider>,
    document.getElementById('app')
);