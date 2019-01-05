import React from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'antd';

import Dashboard from './components/dashboard';
import CreateNewProject from './components/create-new-project/errorTips';

import './index.less';

export default function WorkspaceDashboardContainer(props) {
    let { match } = props;

    return (
        <Layout className="page-workspace">
            <Layout.Content>
                <Route exact path={match.url} component={Dashboard} />
                <Route path={`${match.url}/create-new-project`} component={CreateNewProject} />
            </Layout.Content>
        </Layout>
    );
}

