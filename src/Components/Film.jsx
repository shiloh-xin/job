import React, { Component } from 'react';
// 引入正在热映、即将上映
import ComingSoon from './ComingSoon';
import NowPlaying from './NowPlaying';
import { Link, Route } from 'react-router-dom';

class Film extends Component {
    render() {
        return (
            <div className="nav">
                <ol>
                    <li>
                        <Link to="/film/coming">正在热映</Link>
                    </li>
                    <li>
                        <Link to="/film/now">即将上映</Link>
                    </li>
                </ol>
                <h1>电影</h1>
                <Route path="/film/coming" component={ComingSoon}></Route>
                <Route path="/film/now" component={NowPlaying}></Route>
            </div>
        );
    }
}

export default Film;
