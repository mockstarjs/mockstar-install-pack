import React, { Component, Fragment } from 'react';
import { Button, Col, Row } from 'antd';
import { Result } from 'ant-design-pro';

export default class CreateStep5 extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const information = (
            <div>
                <Row>
                    <Col xs={24} sm={8}>
                        路径：
                    </Col>
                    <Col xs={24} sm={16}>
                        路径
                    </Col>
                </Row>
            </div>
        );

        const actions = (
            <Fragment>
                <Button type="primary">
                    再转一笔
                </Button>

                <Button>查看账单</Button>
            </Fragment>
        );

        return (
            <Result
                type="success"
                title="操作成功"
                description="预计两小时内到账"
                extra={information}
                actions={actions}
            />
        );
    }
}
