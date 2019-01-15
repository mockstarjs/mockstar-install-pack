import React, { Component } from 'react';

import { Form, Input, InputNumber, Modal } from 'antd';

const FormItem = Form.Item;

export const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 18
    }
};

class OpenForm extends Component {
    render() {
        const { form, selectedDirectory, showDlg, onOk, onCancel } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Modal
                title="补充基本信息"
                visible={showDlg}
                onOk={onOk}
                onCancel={onCancel}
            >
                <Form className="open-form">
                    <FormItem
                        {...formItemLayout}
                        label="项目目录"
                    >
                        <span className="ant-form-text">
                            {selectedDirectory}
                        </span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="一句话描述"
                    >
                        {getFieldDecorator('description', {
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
                            initialValue: 9527
                        })(<InputNumber min={1024} max={65535} />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

export default Form.create()(OpenForm);
