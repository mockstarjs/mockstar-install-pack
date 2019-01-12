import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from 'antd';

import CreateByStep from './create-by-step';
import ErrorTips from './error-tips';

import './index.less';

class WorkspaceCreateNewProject extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { createProjectInfo } = this.props;
        const { errMsg } = createProjectInfo;

        return (
            <div className="page-workspace-create-new-project">
                <Card bordered={false}>
                    <ErrorTips message={errMsg} />
                </Card>

                <Card bordered={false}>
                    <CreateByStep />
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { projectInfo, createProjectInfo } = state;

    return {
        isLoaded: projectInfo.isLoaded,
        isSuccess: projectInfo.isSuccess,
        data: projectInfo.data,
        createProjectInfo: createProjectInfo
    };
}

export default connect(mapStateToProps)(WorkspaceCreateNewProject);
