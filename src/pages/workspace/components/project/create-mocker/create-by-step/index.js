import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Steps } from 'antd';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { goStep1, goStep2, saveStep1, saveStep2 } from '../../../../data/data-create-mocker';

import './index.less';

class CreateByStep extends Component {
    render() {
        const { createMockerInfo, saveStep1, goStep1, saveStep2, goStep2 } = this.props;
        const { curStep } = createMockerInfo;

        return (
            <Fragment>

                <Steps current={curStep} className="create-by-step">
                    <Steps.Step title="项目基本信息" />
                    <Steps.Step title="填写额外信息" />
                    <Steps.Step title="确认信息" />
                    <Steps.Step title="完成" />
                </Steps>

                {
                    curStep === 0 ? (
                        <Step1
                            createMockerInfo={createMockerInfo}
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
                            goBack={goStep2}
                        />
                    ) : null
                }
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { projectInfo, createMockerInfo } = state;

    return {
        isLoaded: projectInfo.isLoaded,
        isSuccess: projectInfo.isSuccess,
        data: projectInfo.data,
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateByStep);
