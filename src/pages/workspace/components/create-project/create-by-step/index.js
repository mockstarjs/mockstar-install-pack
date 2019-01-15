import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Steps } from 'antd';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { goStep1, loadCreateProject, saveStep1 } from '../../../data/data-create-project';

import './index.less';

class CreateByStep extends Component {
    render() {
        const {
            parentPath,
            createProjectInfo,
            loadCreateProject,
            saveStep1,
            goStep1,
            goHome,
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
                            onSubmit={loadCreateProject}
                            goBack={goStep1}
                        />
                    ) : null
                }
                {
                    curStep === 2 ? (
                        <Step3
                            createProjectInfo={createProjectInfo}
                            goHome={goHome}
                            goCreateProject={goCreateProject}
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

        loadCreateProject(data) {
            return dispatch(loadCreateProject(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateByStep);
