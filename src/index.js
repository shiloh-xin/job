import React from 'react';
import ReactDOM from 'react-dom';

// 配置redux
import { Provider } from 'react-redux';
import store from './Store/index';

// 设置路由模式
import { BrowserRouter as Router } from 'react-router-dom';

import App from './FilmFooter';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>,
    document.getElementById('root')
);
