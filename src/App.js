import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Layout } from 'antd';

import LayoutHeader from './components/layout-header';

import Home from './pages/home';
import Workspace from './pages/workspace';
import OnlyTest from './pages/only-test';

import './App.less';

const App = () => (
    <Router>

        <Layout className="app-container">
            <LayoutHeader />

            <Layout.Content>
                <Route exact path={`/`} component={Home} />
                <Route path={`/home`} component={Home} />
                <Route path={`/workspace`} component={Workspace} />
                <Route path={`/only-test`} component={OnlyTest} />
            </Layout.Content>
        </Layout>

    </Router>
);

export default App;