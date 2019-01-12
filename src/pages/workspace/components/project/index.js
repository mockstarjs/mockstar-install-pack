import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { loadCurrentProjectData } from '../../data/data-current-project';

import Header from './header';
import IframeContainer from './iframe-container';

class PageWorkspaceProject extends Component {
    componentDidMount() {
        // 加载当前项目的信息
        this.props.loadCurrentProjectData(this.props.match.params.projectId);

        // TODO 如果 projectId 非法
    }

    render() {
        return (
            <div className="page-workspace-project">
                <Header />
                <IframeContainer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { projectInfo } = state;

    return {
        isLoaded: projectInfo.isLoaded
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
