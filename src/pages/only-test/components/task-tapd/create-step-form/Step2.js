import React, { Component, Fragment } from 'react';

import { Button, DatePicker, Divider, Form, Input } from 'antd';

import { formItemLayout } from './layout-config';

import EditableTagGroup from './EditableTagGroup';

const { MonthPicker, RangePicker } = DatePicker;
const FormItem = Form.Item;

class CreateStep1 extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleValidateForm = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                const rangeValue = values['date-range'];

                console.log([rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Fragment>
                <Form layout="horizontal" className="stepForm">
                    <FormItem {...formItemLayout} label="需求英文标记">
                        {getFieldDecorator('nameEn', {
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input placeholder="需求英文名字，用于命名分支" />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="需求起止日期"
                    >
                        {getFieldDecorator('date-range', {
                            rules: [{ type: 'array', required: true, message: '请选择日期' }]
                        })(
                            <RangePicker />
                        )}
                    </FormItem>

                    <FormItem {...formItemLayout} label="产品经理">
                        {getFieldDecorator('personProduct', {
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<EditableTagGroup />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="Web 前端开发">
                        {getFieldDecorator('personWeb', {
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<EditableTagGroup />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="后台开发">
                        {getFieldDecorator('personCGI', {
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<EditableTagGroup />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="测试人员">
                        {getFieldDecorator('personTester', {
                            rules: [
                                {
                                    required: true
                                }
                            ]
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
