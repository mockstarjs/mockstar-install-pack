import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PageHeader } from 'ant-design-pro';

import './index.less';

class HomeHeader extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        const content = (
            <div className="header-content-wrapper">
                <p>MockStar 专注于数据模拟。</p>
                <div className="link">
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" /> 打开项目
                    </a>
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" /> 创建项目
                    </a>
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" /> 使用文档
                    </a>
                </div>
            </div>
        );

        return (
            <div className="page-home-header">
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

export default connect(mapStateToProps)(HomeHeader);
