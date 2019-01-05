import React, { Component } from 'react';

import HomeHeader from './components/home-header';
import ProjectList from './components/project-list';

import './index.less';

export default class Home extends Component {
    componentDidMount() {
        // 加载历史项目信息
    }

    render() {
        return (
            <div className="page-home">
                <HomeHeader />

                <ProjectList />
            </div>
        );
    }
}
