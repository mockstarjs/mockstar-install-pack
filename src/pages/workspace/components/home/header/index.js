import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, message } from 'antd';
import { PageHeader } from 'ant-design-pro';

import './index.less';

class PageWorkspaceHomeHeader extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    handleOpenProject = () => {
        this.props.goOpenProject();
    };

    handleCreateProject = () => {
        this.props.goCreateProject();
    };

    handleGoHelp = () => {
        message.info('使用文档');
    };

    render() {
        const content = (
            <div className="header-content-wrapper">
                <p>MockStar 专注于数据模拟。</p>
                <div className="action-wrapper">
                    <Button type="primary" icon="folder-open" onClick={this.handleOpenProject}>打开项目</Button>
                    <Button type="primary" icon="plus" onClick={this.handleCreateProject}>创建项目</Button>
                    <Button icon="question-circle" onClick={this.handleGoHelp}>使用文档</Button>
                </div>
            </div>
        );

        return (
            <div className="page-workspace-home-header">
                <PageHeader
                    title="欢迎使用 MockStar 工具"
                    content={content}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { projectInfo } = state;

    return {
        isLoaded: projectInfo.isLoaded,
        isSuccess: projectInfo.isSuccess,
        data: projectInfo.data
    };
}

export default connect(mapStateToProps)(PageWorkspaceHomeHeader);
