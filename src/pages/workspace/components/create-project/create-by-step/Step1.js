import React, { Component, Fragment } from 'react';

import { Button, Col, Divider, Form, Input, InputNumber, Row } from 'antd';
import { formItemLayout } from './layout-config';

const FormItem = Form.Item;

class CreateStep1 extends Component {
    state = {
        errMsgList: []
    };

    handleValidateForm = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Received values of step1 form: ', values);
                }

                this.props.onSubmit(values);
            }
        });
    };

    render() {
        const { form, createProjectInfo, loadCreateProjectRootFolder } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Fragment>
                <Form layout="horizontal" className="create-by-step-form">
                    <FormItem
                        {...formItemLayout}
                        label="项目的父级路径"
                        help="请点击按钮选择路径，新创建的项目即在该路径下"
                    >
                        <Row type="flex">
                            <Col span={4}>
                                <Button type="primary" block onClick={loadCreateProjectRootFolder}>选择路径</Button>
                            </Col>
                            <Col span={20}>
                                {getFieldDecorator('parentPath', {
                                    initialValue: createProjectInfo.parentPath,
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(<Input readOnly />)}
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="项目英文名"
                        help="不能包含中文，且必须要符合文件夹命名规范"
                    >
                        {getFieldDecorator('name', {
                            initialValue: createProjectInfo.name,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="一句话描述"
                        help="描述信息能够帮助快速区分项目"
                    >
                        {getFieldDecorator('description', {
                            initialValue: createProjectInfo.description,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input placeholder="例如：摇一摇红包项目" />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="预分配端口号"
                        help="端口号可配置区间1024-65535，默认值 9527"
                    >
                        {getFieldDecorator('port', {
                            initialValue: createProjectInfo.port
                        })(<InputNumber min={1024} max={65535} />)}
                    </FormItem>

                    <FormItem
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: {
                                span: formItemLayout.wrapperCol.span,
                                offset: formItemLayout.labelCol.span
                            }
                        }}
                        label=""
                    >
                        <Button type="primary" onClick={this.handleValidateForm}>
                            下一步
                        </Button>
                    </FormItem>
                </Form>

                <Divider style={{ margin: '40px 0 24px' }} />

                <div className="desc">
                    <h3>说明</h3>
                    <p>
                        关于"桩对象类型"的更多说明，请查看文档。
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default Form.create()(CreateStep1);
