import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Steps } from 'antd';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

import {
    goStep1,
    goStep2,
    goStep3,
    loadCreateMocker,
    saveStep1,
    saveStep2,
    saveStep3
} from '../../../data/data-create-mocker';

import './index.less';

class CreateByStep extends Component {
    render() {
        const {
            parentPath,
            createMockerInfo,
            saveStep1,
            goStep1,
            saveStep2,
            goStep2,
            saveStep3,
            goStep3,
            loadCreateMocker,
            goProjectHome,
            goCreateMocker
        } = this.props;

        const { curStep } = createMockerInfo;

        return (
            <div className="create-by-step">

                <Steps current={curStep} className="step-tab">
                    <Steps.Step title="选择类型" />
                    <Steps.Step title="基础信息" />
                    <Steps.Step title="其他信息" />
                    <Steps.Step title="确认" />
                    <Steps.Step title="完成" />
                </Steps>

                {
                    curStep === 0 ? (
                        <Step1
                            createMockerInfo={createMockerInfo}
                            parentPath={parentPath}
                            onSubmit={saveStep1}
                        />
                    ) : null
                }
                {
                    curStep === 1 ? (
                        <Step2
                            createMockerInfo={createMockerInfo}
                            onSubmit={saveStep2}
                            goBack={goStep1}
                        />
                    ) : null
                }

                {
                    curStep === 2 ? (
                        <Step3
                            createMockerInfo={createMockerInfo}
                            onSubmit={saveStep3}
                            goBack={goStep2}
                        />
                    ) : null
                }

                {
                    curStep === 3 ? (
                        <Step4
                            createMockerInfo={createMockerInfo}
                            onSubmit={loadCreateMocker}
                            goBack={goStep3}
                        />
                    ) : null
                }

                {
                    curStep === 4 ? (
                        <Step5
                            createMockerInfo={createMockerInfo}
                            goProjectHome={goProjectHome}
                            goCreateMocker={goCreateMocker}
                        />
                    ) : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { currentProjectInfo, createMockerInfo } = state;

    return {
        parentPath: currentProjectInfo.basePath,
        createMockerInfo: createMockerInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveStep1(data) {
            return dispatch(saveStep1(data));
        },

        goStep1() {
            return dispatch(goStep1());
        },

        saveStep2(data) {
            return dispatch(saveStep2(data));
        },

        goStep2() {
            return dispatch(goStep2());
        },

        saveStep3(data) {
            return dispatch(saveStep3(data));
        },

        goStep3() {
            return dispatch(goStep3());
        },

        loadCreateMocker(data) {
            return dispatch(loadCreateMocker(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateByStep);
