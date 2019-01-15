import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';

import { hideOpenProjectDlg } from '../../../data/data-open-project';

import './index.less';

class LoadProject extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleOk = () => {
        console.log('===handleOk====');
    };

    handleCancel = () => {
        this.props.hideOpenProjectDlg();
    };

    render() {

        const { selectedDirectory, showDlg } = this.props;

        return (
            <div className="load-project">
                <div>{selectedDirectory}</div>

                <Modal
                    title="补充基本信息"
                    visible={showDlg}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>hello</p>
                    <div>{selectedDirectory}</div>
                </Modal>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { openProjectInfo } = state;

    return {
        selectedDirectory: openProjectInfo.selectedDirectory,
        showDlg: openProjectInfo.showDlg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        hideOpenProjectDlg() {
            return dispatch(hideOpenProjectDlg());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadProject);
