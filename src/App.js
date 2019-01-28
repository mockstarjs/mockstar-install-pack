import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from 'antd';

import LayoutHeader from './components/layout-header';
import Workspace from './pages/workspace';
import OnlyTest from './pages/only-test';

import './App.less';

const App = () => (
    <Router>

        <Layout className="app-container">
            <LayoutHeader />

            <Layout.Content>
                <Switch>
                    <Redirect exact from="/" to={`/workspace`} />
                    <Route path={`/workspace`} component={Workspace} />
                    <Route path={`/only-test`} component={OnlyTest} />
                </Switch>
            </Layout.Content>
        </Layout>

    </Router>
);

export default App;