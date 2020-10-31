import React, { Component } from 'react';
// 引入子组件
import Film from './Components/Film';
import Cinema from './Components/Cinema';
import Center from './Components/Center';

// 引入css
import './FilmFooter.css';
// 引入路由
import { Route, Link } from 'react-router-dom';

class FilmFooter extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/film">
                            <p>电影</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cinema">
                            <p>影院</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/center">
                            <p>我的</p>
                        </Link>
                    </li>
                </ul>
                <Route path="/film" component={Film}></Route>
                <Route path="/cinema" component={Cinema}></Route>
                <Route path="/center" component={Center}></Route>
            </div>
        );
    }
}

export default FilmFooter;
