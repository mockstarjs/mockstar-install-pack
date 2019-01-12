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
        const { form, createMockerInfo, goBack } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Fragment>
                <Form layout="horizontal" className="create-by-step-form">
                    <FormItem
                        {...formItemLayout}
                        label="一句话描述"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.description}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="接口地址"
                        help="格式：https://domain.com/cgi-bin/name 或 /cgi/a/name "
                    >
                        {getFieldDecorator('requestURL', {
                            initialValue: createMockerInfo.inputInfo.requestURL,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="请求类型"
                    >
                        {getFieldDecorator('method', {
                            initialValue: createMockerInfo.mockerConfig.method,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(
                            <Select>
                                <Select.Option value="get">GET</Select.Option>
                                <Select.Option value="post">POST</Select.Option>
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
                        <Button onClick={goBack}>
                            上一步
                        </Button>

                        <Button type="primary" onClick={this.handleValidateForm}>
                            下一步
                        </Button>
                    </FormItem>
                </Form>

                <Divider style={{ margin: '40px 0 24px' }} />

                <div className="desc">
                    <h3>说明</h3>
                    <p>
                        这里是额外的说明
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default Form.create()(CreateStep1);
