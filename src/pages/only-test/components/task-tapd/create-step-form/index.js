import React, { Component, Fragment } from 'react';

import { Steps } from 'antd';

import Step1 from './Step1';
import Step2 from './Step2';

import './index.less';

const { Step } = Steps;

export default class CreateStepForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            curStep: 1
        };
    }

    render() {
        const { curStep } = this.state;

        return (
            <Fragment>

                <Steps current={curStep} className="steps">
                    <Step title="填写tapd单信息" />
                    <Step title="填写额外信息" />
                    <Step title="确认信息" />
                    <Step title="完成" />
                </Steps>

                {
                    curStep === 0 ? <Step1 /> : null
                }

                {
                    curStep === 1 ? <Step2 /> : null
                }

            </Fragment>
        );
    }
}