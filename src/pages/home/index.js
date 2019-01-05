import React, { Component } from 'react';
import { Button } from 'antd';

import ProjectList from './components/project-list';
import { PageHeader } from 'ant-design-pro';

import './index.less';

export default class Home extends Component {
    componentDidMount() {

    }

    render() {
        const content = (
            <div>
                <p>MockStar 专注于数据模拟。</p>
                <div className="link">
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" /> 快速开始
                    </a>
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" /> 产品简介
                    </a>
                    <a>
                        <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" /> 使用文档
                    </a>
                </div>
            </div>
        );

        return (
            <div className="page-home">
                <Button size="large">打开项目</Button>
                <Button size="large" type="primary">创建项目</Button>

                <PageHeader
                    title="欢迎使用 MockStar 工具"
                    content={content}
                />
                <ProjectList />
            </div>
        );
    }
}
