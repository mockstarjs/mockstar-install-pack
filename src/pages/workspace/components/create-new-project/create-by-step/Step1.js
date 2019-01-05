import React, { Component, Fragment } from 'react';

import { Button, Divider, Form, Input } from 'antd';
import { formItemLayout } from './layout-config';

const FormItem = Form.Item;

function validateStrLength(str = '', min = 0, max = 100) {
    let strLen = 0;
    for (let i = 0; i < str.length; i++) {
        if (/^[\u4e00-\u9fa5]+$/g.test(str[i])) {
            strLen += 2;
        } else {
            strLen += 1;
        }
    }
    let result = strLen >= min;

    if (!result) {
        return false;
    }

    if (typeof max === 'number') {
        return strLen <= max;
    }

    return true;
}

class CreateStep1 extends Component {
    state = {
        errMsgList: []
    };

    handleValidateNickName = (rule, value, callback) => {
        if (validateStrLength(value, 5, 40)) {
            callback();
        } else {
            callback('限制5-25个汉字');
        }
    };

    handleValidateForm = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of step1 form: ', values);
                this.props.onSubmit(values);
            }
        });
    };

    render() {
        const { form, createProjectInfo } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Fragment>
                <Form layout="horizontal" className="create-by-step-form">


                    <FormItem
                        {...formItemLayout}
                        label="父级目录"
                    >
                        <span className="ant-form-text">{createProjectInfo.parentPath}</span>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="项目 owner"
                        help="英文人名，将用于设置git权限、badjs权限、离线包权限等场景，不能随便输入"
                    >
                        {getFieldDecorator('rtxName', {
                            initialValue: createProjectInfo.basicInfo.rtxName,
                            rules: [
                                {
                                    required: true
                                }
                            ]
                        })(<Input
                            placeholder="英文人名"
                        />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="项目名（git的仓库名）"
                        help="必须是符合文件夹命名规范，不要设置中文；格式规则：(now|shangfen|nearby)-(activity|h5|pc|mobile|web|app|qq|partner|demo)-xxx"
                    >
                        {getFieldDecorator('name', {
                            initialValue: createProjectInfo.basicInfo.name,
                            rules: [
                                {
                                    required: true,
                                    pattern: /^(now|shangfen|nearby|hy|universal|qunpay|huiyin)-(activity|h5|pc|mobile|web|app|qq|partner|demo)-/
                                }
                            ]
                        })(<Input
                            placeholder="(now|shangfen|nearby)-(activity|h5|pc|mobile|web|app|qq|partner|demo)-xxx"
                        />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="项目的中文别称"
                        help="用于项目之间的识别，离线包/badjs等平台中使用到，请尽量避免与其他项目重名，限制5-20个汉字"
                    >
                        {getFieldDecorator('nickName', {
                            initialValue: createProjectInfo.basicInfo.nickName,
                            rules: [
                                {
                                    required: true,
                                    validator: this.handleValidateNickName
                                }
                            ]
                        })(<Input placeholder="项目的中文别称" />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="项目描述信息"
                    >
                        {getFieldDecorator('description', {
                            initialValue: createProjectInfo.basicInfo.description,
                            rules: []
                        })(<Input placeholder="项目描述信息" />)}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="版本号"
                    >
                        {getFieldDecorator('description', {
                            initialValue: createProjectInfo.basicInfo.version,
                            rules: []
                        })(<Input placeholder="0.1.0" />)}
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
                        这里是额外的说明
                    </p>
                </div>
            </Fragment>
        );
    }
}

export default Form.create()(CreateStep1);
