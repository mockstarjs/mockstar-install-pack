import _ from 'lodash';

import {
    MOCKSTAR_START_REQUEST,
    MOCKSTAR_START_REQUEST_FAIL,
    MOCKSTAR_START_REQUEST_SUCCESS,
    MOCKSTAR_STOP_REQUEST,
    MOCKSTAR_STOP_REQUEST_FAIL,
    MOCKSTAR_STOP_REQUEST_SUCCESS,
    OPEN_PROJECT_HIDE_DLG,
    OPEN_PROJECT_REQUEST_FAIL,
    OPEN_PROJECT_REQUEST_SUCCESS,
    OPEN_PROJECT_SAVE_LOCAL_SUCCESS,
    OPEN_PROJECT_START
} from './action';

const initialState = {
    // 当前选择的目录
    selectedDirectory: '',

    showDlg: false,

    // cmd 命令 mockstar start 或 stop 进行中
    isCmdRunning: false,

    // 要在界面反馈的错误信息，可以是字符串，也可以是字符串数组
    errMsg: ''
};

const cloneInitialState = _.cloneDeep(initialState);

export default function openProjectInfo(state = initialState, action) {
    const { type, data } = action;
    let update = {};

    switch (type) {
        case OPEN_PROJECT_START:
            update = cloneInitialState;
            break;

        case OPEN_PROJECT_REQUEST_SUCCESS:
            update = {
                showDlg: data.showDlg,
                selectedDirectory: data.selectedDirectory,
                errMsg: ''
            };
            break;

        case OPEN_PROJECT_REQUEST_FAIL:
            update = {
                showDlg: false,
                selectedDirectory: '',
                errMsg: data.msg
            };
            break;

        case OPEN_PROJECT_HIDE_DLG:
            update = {
                showDlg: false,
                errMsg: ''
            };
            break;

        case OPEN_PROJECT_SAVE_LOCAL_SUCCESS:
            update = {
                showDlg: false,
                errMsg: ''
            };
            break;

        case MOCKSTAR_START_REQUEST:
        case MOCKSTAR_STOP_REQUEST:
            update.isCmdRunning = true;
            break;

        case MOCKSTAR_START_REQUEST_SUCCESS:
        case MOCKSTAR_START_REQUEST_FAIL:
        case MOCKSTAR_STOP_REQUEST_SUCCESS:
        case MOCKSTAR_STOP_REQUEST_FAIL:
            update.isCmdRunning = false;
            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}


