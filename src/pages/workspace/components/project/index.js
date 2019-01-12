import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { loadCurrentProjectData } from '../../data/data-current-project';

import Dashboard from './dashboard';
import CreateMocker from './create-mocker';

import './index.less';

class PageWorkspaceProject extends Component {
    componentDidMount() {
        // 加载当前项目的信息
        this.props.loadCurrentProjectData(this.props.match.params.projectId);

        // TODO 如果 projectId 非法

    }

    render() {
        let { match } = this.props;

        console.log('---match---', match);

        return (
            <div className="page-workspace-project">
                <Route exact path={match.url} component={Dashboard} />
                <Route path={`${match.path}/create-mocker`}  component={CreateMocker} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { currentProjectInfo } = state;

    return {
        currentProjectInfo: currentProjectInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadCurrentProjectData(projectId) {
            return dispatch(loadCurrentProjectData(projectId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWorkspaceProject);
