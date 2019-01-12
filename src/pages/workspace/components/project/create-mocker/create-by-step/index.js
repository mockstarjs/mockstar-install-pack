import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Steps } from 'antd';

import Step1 from './Step1';
import Step2 from './Step2';

import { saveStep1 } from '../../../../data/data-create-project';

import './index.less';

const { Step } = Steps;

class CreateByStep extends Component {
    render() {
        const { createProjectInfo,saveStep1 } = this.props;
        const { curStep } = createProjectInfo;

        return (
            <Fragment>

                <Steps current={curStep} className="steps">
                    <Step title="项目基本信息" />
                    <Step title="填写额外信息" />
                    <Step title="确认信息" />
                    <Step title="完成" />
                </Steps>

                {
                    curStep === 0 ? <Step1 createProjectInfo={createProjectInfo} onSubmit={saveStep1}/> : null
                }

                {
                    curStep === 1 ? <Step2 createProjectInfo={createProjectInfo} /> : null
                }

            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { projectInfo, createProjectInfo } = state;

    return {
        isLoaded: projectInfo.isLoaded,
        isSuccess: projectInfo.isSuccess,
        data: projectInfo.data,
        createProjectInfo: createProjectInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveStep1(data) {
            return dispatch(saveStep1(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateByStep);
