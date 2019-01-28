import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Home from './components/home';
import CreateProject from './components/create-project';
import Project from './components/project';

import { loadLocalDBData, loadMockStarStatus } from '../../data/data-local-db';

import './index.less';

class PageWorkspace extends Component {
    componentDidMount() {
        // 获取存储在本地数据库中的项目信息
        this.props.loadLocalDBData();
        this.props.loadMockStarStatus();
    }

    render() {
        let { match } = this.props;

        return (
            <div className="page-workspace">
                <Route exact path={match.url} component={Home} />
                <Route strict path={`${match.url}/create-project`} component={CreateProject} />
                <Route path={`${match.url}/project/:projectId`} component={Project} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { localDBInfo } = state;

    return {
        isLoaded: localDBInfo.isLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadLocalDBData() {
            return dispatch(loadLocalDBData());
        },

        loadMockStarStatus() {
            return dispatch(loadMockStarStatus());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWorkspace);


