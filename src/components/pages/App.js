import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../helpers/history';

import Header from '../organisms/Header'
import DrawerMenu from '../organisms/DrawerMenu';
import WatchPage from './WatchPage';
import SearchResultPage from './SearchResultPage';
import HomePage from './HomePage';

function App() {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Router history={history}>
                <Header location={history.location}/>
                <DrawerMenu />
                {/* 中央にを何を表示させるか */}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/Watch' component={WatchPage} />
                    <Route exact path='/SearchResult' component={SearchResultPage} />
                </Switch>
            </Router>
        </div>
    );
};
export default App;