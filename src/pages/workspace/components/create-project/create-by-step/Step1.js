import React, { Component, Fragment } from 'react';

import { Button, Divider, Form, Input, Select } from 'antd';
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
        const { form, createMockerInfo, parentPath } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Fragment>
                <Form layout="horizontal" className="create-by-step-form">
                    <FormItem
                        {...formItemLayout}
                        label="父级目录"
                    >
                        {getFieldDecorator('parentPath', {
                            initialValue: parentPath
                        })(<Input disabled />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="一句话描述"
                    >
                        {getFieldDecorator('description', {
                            initialValue: createMockerInfo.mockerConfig.description,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input placeholder="例如：获取用户信息的接口" />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="桩对象类型"
                    >
                        {getFieldDecorator('plugin', {
                            initialValue: createMockerInfo.mockerConfig.plugin,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(
                            <Select>
                                <Select.Option value="xhr">XHR(适合基于http的接口)</Select.Option>
                            </Select>
                        )}
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
