import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { loadCurrentProjectData } from '../../data/data-current-project';

import Header from './header';

class PageWorkspaceProject extends Component {
    componentDidMount() {
        // 加载当前项目的信息
        this.props.loadCurrentProjectData(this.props.match.params.projectName);

        // TODO 如果 projectName 非法
    }

    render() {
        return (
            <div className="page-workspace-project">
                <Header />
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
        loadCurrentProjectData(projectName) {
            return dispatch(loadCurrentProjectData(projectName));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWorkspaceProject);
