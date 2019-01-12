import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from 'antd';

import ShowErrorTips from '../../../../components/show-error-tips';
import CreateByStep from './create-by-step';
import Header from './header';

import { startCreateProject } from '../../data/data-create-project';

import './index.less';

class WorkspaceCreateNewProject extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    /**
     * 返回上一级，即返回到 mocker 操作页面
     */
    handleGoHome = () => {
        // 返回上一级目录
        const arr = this.props.match.url.split('/');
        arr.pop();

        this.props.history.push(arr.join('/'));
    };

    /**
     * 进入到创建 project 的页面
     */
    handleGoCreateProject = () => {
        // 一定要重置状态
        this.props.startCreateProject();
    };

    render() {
        const { createMockerInfo } = this.props;
        const { errMsg } = createMockerInfo;

        return (
            <div className="page-workspace-project-create-mocker">
                <Header goHome={this.handleGoHome} />

                <div className="create-by-step-wrapper">
                    <Card bordered={false}>
                        <ShowErrorTips message={errMsg} />
                    </Card>

                    <Card bordered={false}>
                        <CreateByStep
                            goHome={this.handleGoHome}
                            goCreateProject={this.handleGoCreateProject}
                        />
                    </Card>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { createMockerInfo } = state;

    return {
        createMockerInfo: createMockerInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        startCreateProject() {
            return dispatch(startCreateProject());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceCreateNewProject);
