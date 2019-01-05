import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageHeader } from 'ant-design-pro';

import './index.less';

class PageWorkspaceProjectHeader extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        const { currentProjectInfo } = this.props;

        const content = (
            <div className="header-content-wrapper">
                <p>{currentProjectInfo.description}</p>
                <div className="link">
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" /> 启动/关闭
                    </a>
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" /> 新增桩对象
                    </a>
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" /> 工程配置
                    </a>
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
