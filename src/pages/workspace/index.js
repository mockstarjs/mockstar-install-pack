import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Home from './components/home';
import Project from './components/project';

import { loadLocalDBData } from '../../data/data-local-db';

import './index.less';

class PageWorkspace extends Component {
    componentDidMount() {
        // 获取存储在本地数据库中的项目信息
        this.props.loadLocalDBData();
    }

    render() {
        let { match } = this.props;

        return (
            <div className="page-workspace">
                <Route exact path={match.url} component={Home} />
                <Route path={`${match.url}/:projectId`} component={Project} />
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWorkspace);


