import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Steps } from 'antd';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { goStep1, goStep2, loadCreateProject, saveStep1, saveStep2 } from '../../../data/data-create-project';

import './index.less';

class CreateByStep extends Component {
    render() {
        const {
            parentPath,
            createProjectInfo,
            saveStep1,
            goStep1,
            saveStep2,
            goProjectHome,
            goCreateProject
        } = this.props;

        const { curStep } = createProjectInfo;

        return (
            <div className="create-by-step">

                <Steps current={curStep} className="step-tab">
                    <Steps.Step title="配置信息" />
                    <Steps.Step title="确认" />
                    <Steps.Step title="完成" />
                </Steps>

                {
                    curStep === 0 ? (
                        <Step1
                            createProjectInfo={createProjectInfo}
                            parentPath={parentPath}
                            onSubmit={saveStep1}
                        />
                    ) : null
                }
                {
                    curStep === 1 ? (
                        <Step2
                            createProjectInfo={createProjectInfo}
                            onSubmit={saveStep2}
                            goBack={goStep1}
                        />
                    ) : null
                }
                {
                    curStep === 2 ? (
                        <Step3
                            createProjectInfo={createProjectInfo}
                            goProjectHome={goProjectHome}
                            goCreateMocker={goCreateProject}
                        />
                    ) : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { currentProjectInfo, createMockerInfo, createProjectInfo } = state;

    return {
        parentPath: currentProjectInfo.basePath,
        createMockerInfo: createMockerInfo,
        createProjectInfo: createProjectInfo
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

        loadCreateProject(data) {
            return dispatch(loadCreateProject(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateByStep);
