import React, { Component, Fragment } from 'react';

import { Button, Divider, Form, Input } from 'antd';

import { formItemLayout } from './layout-config';

const FormItem = Form.Item;

class CreateStep1 extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleValidateForm = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Fragment>
                <Form layout="horizontal" className="stepForm">
                    <FormItem {...formItemLayout} label="需求单名称">
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input placeholder="需求单名称" />)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="需求单地址">
                        {getFieldDecorator('tapd', {
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input placeholder="需求单地址" />)}
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
                    <h4>转账到支付宝账户</h4>
                    <p>
                        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default Form.create()(CreateStep1);
