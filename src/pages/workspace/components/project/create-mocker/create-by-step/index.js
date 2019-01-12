import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Steps } from 'antd';

import Step1 from './Step1';
import Step2 from './Step2';

import { goStep1, saveStep1 } from '../../../../data/data-create-mocker';

import './index.less';

class CreateByStep extends Component {
    render() {
        const { createMockerInfo, saveStep1, goStep1 } = this.props;
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
                            goBack={goStep1}
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateByStep);
