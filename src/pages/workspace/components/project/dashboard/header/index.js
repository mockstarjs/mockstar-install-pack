import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, message } from 'antd';
import { PageHeader } from 'ant-design-pro';

import './index.less';

class PageWorkspaceProjectHeader extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    handleStart = () => {
        message.info('启动');
    };

    handleStop = () => {
        message.info('关闭');
    };

    handleCreateMocker = () => {
        this.props.goCreateMocker();
    };

    handleConfig = () => {
        message.info('工程配置');
    };

    render() {
        const { currentProjectInfo } = this.props;

        const content = (
            <div className="header-content-wrapper">
                <p>{currentProjectInfo.description}</p>
                <div className="action-wrapper">
                    <Button type="primary" icon="check-circle" onClick={this.handleStart}>启动</Button>
                    <Button type="primary" icon="stop" onClick={this.handleStop}>关闭</Button>
                    <Button type="primary" icon="plus" onClick={this.handleCreateMocker}>新增桩对象</Button>
                    <Button icon="setting" onClick={this.handleConfig}>配置</Button>
                </div>
            </div>
        );

        return (
            <div className="page-workspace-project-header">
                <PageHeader
                    title={currentProjectInfo.title}
                    content={content}
                />
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

export default connect(mapStateToProps)(PageWorkspaceProjectHeader);
