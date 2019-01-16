import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import { Button, Divider, Layout } from 'antd';

import Dashboard from './components/dashboard';
import LoadProject from './components/load-project';
import TestHandleOtherSite from './components/test-handle-other-site';
import TestLottie from './components/test-lottie';

import './index.less';

export default function OnlyTestContainer(props) {
    let { match } = props;

    return (
        <Layout className="page-only-test">
            <Layout.Content>

                <h1>本页面仅用于调试和学习之用</h1>

                <Button><NavLink to={`${match.url}/test-lottie`}>测试 Lottie</NavLink></Button>
                <Button><NavLink to={`${match.url}/load-project`}>加载已有的项目</NavLink></Button>
                <Button><NavLink to={`${match.url}/test-handle-other-site`}>试试其他站点</NavLink></Button>

                <Divider />

                <Route exact path={match.url} component={Dashboard} />
                <Route path={`${match.url}/load-project`} component={LoadProject} />
                <Route path={`${match.url}/test-handle-other-site`} component={TestHandleOtherSite} />
                <Route path={`${match.url}/test-lottie`} component={TestLottie} />

            </Layout.Content>
        </Layout>
    );
}

