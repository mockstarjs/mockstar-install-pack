import React, { Component } from 'react';

import { Button, Form, Input } from 'antd';

import './index.less';

const FormItem = Form.Item;

class CreateForm extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 7 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 10 }
            }
        };

        const submitFormLayout = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 10, offset: 7 }
            }
        };

        return (
            <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
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
                <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
                    <Button type="primary" htmlType="submit" loading={false}>
                        提交
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(CreateForm);
