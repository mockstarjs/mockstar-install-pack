import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, Divider } from 'antd';
import { DescriptionList } from 'ant-design-pro';

import CreateStepForm from './create-step-form';

import './index.less';

const { Description } = DescriptionList;

class Workspace extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        const { isLoaded, isSuccess, data } = this.props;
        const { projectFolder, startkitConfig } = data;

        if (!isSuccess) {
            return null;
        }

        return (
            <div className="page-workspace-dashboard">
                <Card bordered={false}>
                    <DescriptionList size="large" title="基础信息" style={{ marginBottom: 32 }}>
                        <Description term="路径">{projectFolder}</Description>
                        <Description term="仓库名">{startkitConfig.name}</Description>
                        <Description term="仓库地址">{startkitConfig.gitProjectData.web_url}</Description>
                        <Description term="中文别名">{startkitConfig.nickName}</Description>
                        <Description term="描述信息">{startkitConfig.description}</Description>
                        <Description term="项目Owner">{startkitConfig.rtxName}</Description>
                    </DescriptionList>

                    <Divider style={{ marginBottom: 32 }} />

                    <DescriptionList size="large" title="资源信息" style={{ marginBottom: 32 }}>
                        <Description
                            term="离线包ID">{startkitConfig.offlineId} </Description>
                        <Description term="BadjJS ID">{startkitConfig.badjsId} (http://badjs2.ivweb.io)</Description>
                    </DescriptionList>
                </Card>

                <Card bordered={false}>
                    <CreateStepForm />
                </Card>
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

export default connect(mapStateToProps)(Workspace);
