import React, { Component, Fragment } from 'react';

import { Button, Divider, Form, Input, InputNumber, Select } from 'antd';
import { formItemLayout } from './layout-config';
import EditableTagGroup from './EditableTagGroup';

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
                        label="接口地址"
                    >
                        <span className="ant-form-text">{createMockerInfo.inputInfo.requestURL}</span>
                    </FormItem>


                    <FormItem
                        {...formItemLayout}
                        label="路由规则"
                    >
                        {getFieldDecorator('route', {
                            initialValue: createMockerInfo.mockerConfig.route,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="桩对象英文名"
                        help="必须要符合文件夹命名规范"
                    >
                        {getFieldDecorator('name', {
                            initialValue: createMockerInfo.mockerConfig.name,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="是否禁用"
                    >
                        {getFieldDecorator('disable', {
                            initialValue: createMockerInfo.mockerConfig.disable ? '0' : '1',
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(
                            <Select>
                                <Select.Option value="1">启用</Select.Option>
                                <Select.Option value="0">禁用</Select.Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="生成 README"
                    >
                        {getFieldDecorator('isInitReadme', {
                            initialValue: createMockerInfo.inputInfo.isInitReadme ? '1' : '0',
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(
                            <Select>
                                <Select.Option value="1">是</Select.Option>
                                <Select.Option value="0">否</Select.Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="管理平台排序权重"
                    >
                        {getFieldDecorator('priority', {
                            initialValue: createMockerInfo.mockerConfig.priority,
                        })(<InputNumber min={0} max={9999999} />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="自定义标签">
                        {getFieldDecorator('tags', {
                            initialValue: createMockerInfo.mockerConfig.tags,
                        })(<EditableTagGroup />)}
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
