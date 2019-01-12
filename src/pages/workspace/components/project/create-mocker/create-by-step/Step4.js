import React, { Component, Fragment } from 'react';

import { Button, Divider, Form } from 'antd';
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
        const { createMockerInfo, goBack } = this.props;

        return (
            <Fragment>
                <Form layout="horizontal" className="create-by-step-form">
                    <FormItem
                        {...formItemLayout}
                        label="文件夹命名"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.name}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="桩对象类型"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.plugin}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="一句话描述"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.description}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="路由规则"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.route}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="请求类型"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.method}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="管理平台排序权重"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.priority}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="自定义标签"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.tags.join(', ')}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="是否禁用"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.disable ? '禁用' : '启用'}</span>
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
                            提交
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
