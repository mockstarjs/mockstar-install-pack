import React, { Component } from 'react';

import { Form, Modal, Select } from 'antd';

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
                        })(
                            <Select>
                                <Select.Option value="npm">npm</Select.Option>
                                <Select.Option value="tnpm">tnpm</Select.Option>
                                <Select.Option value="cnpm">cnpm</Select.Option>
                            </Select>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

export default Form.create()(OpenForm);
