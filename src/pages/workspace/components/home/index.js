import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import ProjectList from './project-list';
import OpenProject from './open-project';

import { loadLocalDBData, loadMockStarStatus } from '../../../../data/data-local-db';
import { startCreateProject } from '../../data/data-create-project';
import {
    loadOpenProject,
    loadRemoveOpenProject,
    loadStartProject,
    startOpenProject
} from '../../data/data-open-project';

import './index.less';

class PageWorkspaceHome extends Component {
    componentDidMount() {
        // console.log('---2--', this.props.match, this.props.history);
        this.props.loadMockStarStatus();
    }

    /**
     * 进入到某个指定的项目详情页中
     *
     * @param {Number} projectId 项目ID
     */
    handleGoProject = (projectId) => {
        this.props.history.push(`${this.props.match.url}/project/${projectId}`);
    };

    /**
     * 打开本地 project
     */
    handleGoOpenProject = () => {
        // 一定要重置状态
        this.props.startOpenProject();
        this.props.loadOpenProject();
    };

    /**
     * 移除列表中的 project
     */
    handleRemoveProject = (id) => {
        // 列表中移除
        this.props.loadRemoveOpenProject(id);

        // 刷新列表
        this.props.loadLocalDBData();
    };

    /**
     * 进入到创建 project 的页面
     */
    handleGoCreateProject = () => {
        this.props.history.push(`${this.props.match.url}/create-project`);

        // 一定要重置状态
        this.props.startCreateProject();
    };

    /**
     * 启动项目
     */
    handleStartProject = (id) => {
        this.props.loadStartProject(id);
    };

    render() {
        return (
            <div className="page-workspace-home">
                <Header
                    goOpenProject={this.handleGoOpenProject}
                    goCreateProject={this.handleGoCreateProject}
                />

                <OpenProject goProject={this.handleGoProject} />


                <ProjectList
                    goProject={this.handleGoProject}
                    removeProject={this.handleRemoveProject}
                    startProject={this.handleStartProject}
                />

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
        loadLocalDBData() {
            return dispatch(loadLocalDBData());
        },

        startCreateProject() {
            return dispatch(startCreateProject());
        },

        startOpenProject() {
            return dispatch(startOpenProject());
        },

        loadOpenProject() {
            return dispatch(loadOpenProject());
        },

        loadRemoveOpenProject(id) {
            return dispatch(loadRemoveOpenProject(id));
        },

        loadStartProject(id) {
            return dispatch(loadStartProject(id));
        },

        loadMockStarStatus() {
            return dispatch(loadMockStarStatus());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWorkspaceHome);
