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
        const { createMockerInfo, goBack } = this.props;

        return (
            <Fragment>
                <Form layout="horizontal" className="create-by-step-form">
                    <FormItem
                        {...formItemLayout}
                        label="name"
                    >
                        <span className="ant-form-text">{createMockerInfo.mockerConfig.name}</span>
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
