import React, { Component } from 'react';

import { Form, Input, Modal } from 'antd';

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
        const { form, globalSetting, showDlg, onOk, onCancel } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Modal
                title="全局信息设置"
                visible={showDlg}
                onOk={onOk}
                onCancel={onCancel}
            >
                <Form className="open-form">
                    <FormItem
                        {...formItemLayout}
                        label="请选择npm"
                    >
                        {getFieldDecorator('cmder', {
                            initialValue: globalSetting.cmder,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

export default Form.create()(OpenForm);
