import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowErrorTips from '../../../../../components/show-error-tips';
import OpenForm from './open-form';

import { hideGlobalSettingDlg, loadSaveGlobalSetting } from '../../../data/data-open-project';
import { loadLocalDBData } from '../../../../../data/data-local-db';

import './index.less';

class GlobalSetting extends Component {
    openFormRef = (form) => {
        this.form = form;
    };

    handleOk = () => {
        this.form.validateFields((err, values) => {
            if (!err) {
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Received values of step1 form: ', values);
                }

                const opts = Object.assign({}, values);

                // 首先保存，刷新列表，然后自动跳转
                this.props.loadSaveGlobalSetting(opts)
                    .then((data) => {
                        // 刷新列表
                        this.props.loadLocalDBData();
                    });
            }
        });
    };

    handleCancel = () => {
        this.props.hideGlobalSettingDlg();
    };

    render() {
        const { globalSetting, showDlg, errMsg } = this.props;

        return (
            <div className="page-workspace-home-global-setting">
                <ShowErrorTips message={errMsg} />

                <OpenForm
                    ref={this.openFormRef}
                    globalSetting={globalSetting}
                    showDlg={showDlg}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                />

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { openProjectInfo, localDBInfo } = state;

    return {
        showDlg: openProjectInfo.showGlobalSettingDlg,
        errMsg: openProjectInfo.errMsg,
        globalSetting: localDBInfo.globalSetting || {}
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadLocalDBData() {
            return dispatch(loadLocalDBData());
        },

        hideGlobalSettingDlg() {
            return dispatch(hideGlobalSettingDlg());
        },

        loadSaveGlobalSetting(data) {
            return dispatch(loadSaveGlobalSetting(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSetting);
