import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';
import { PageHeader } from 'ant-design-pro';

import './index.less';

class PageWorkspaceProjectHeader extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        const { currentProjectInfo, goHome } = this.props;

        const content = (
            <div className="header-content-wrapper">
                <p>按照指引创建新项目即可。</p>
                <div className="action-wrapper">
                    <Button type="primary" icon="left" onClick={goHome}>返回</Button>
                </div>
            </div>
        );

        return (
            <div className="page-workspace-project-header">
                <PageHeader
                    title="创建新项目"
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
