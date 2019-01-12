import React, { Component, Fragment } from 'react';
import { Button, Col, Row } from 'antd';
import { Result } from 'ant-design-pro';

export default class CreateStep5 extends Component {
    render() {
        const { createProjectInfo, goHome, goCreateProject } = this.props;

        const information = (
            <div className="step-result-panel">
                <Row>
                    <Col xs={24} sm={8}>
                        路径：
                    </Col>
                    <Col xs={24} sm={16}>
                        {createProjectInfo.parentPath + '/' + createProjectInfo.name}
                    </Col>
                </Row>
            </div>
        );

        const actions = (
            <Fragment>
                <Button type="primary" onClick={goCreateProject}>
                    继续创建
                </Button>

                <Button onClick={goHome}>返回</Button>
            </Fragment>
        );

        return (
            <Result
                type="success"
                title="操作成功"
                description=""
                extra={information}
                actions={actions}
            />
        );
    }
}
