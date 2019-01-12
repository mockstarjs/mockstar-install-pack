import React, { Component, Fragment } from 'react';

import { Button, Divider, Form } from 'antd';
import { formItemLayout } from './layout-config';

const FormItem = Form.Item;

class CreateStep1 extends Component {
    state = {
        errMsgList: []
    };

    handleValidateForm = () => {
        this.props.onSubmit(this.props.createProjectInfo);
    };

    render() {
        const { createProjectInfo, goBack } = this.props;

        return (
            <Fragment>
                <Form layout="horizontal" className="create-by-step-form step-stage-confirm">
                    <FormItem
                        {...formItemLayout}
                        label="创建目录"
                    >
                        <span className="ant-form-text">
                            {`${createProjectInfo.parentPath}/${createProjectInfo.name}`}
                        </span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="一句话描述"
                    >
                        <span className="ant-form-text">{createProjectInfo.description}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="预分配端口号"
                    >
                        <span className="ant-form-text">{createProjectInfo.port}</span>
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
