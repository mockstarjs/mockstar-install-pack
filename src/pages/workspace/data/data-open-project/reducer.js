import _ from 'lodash';

import { OPEN_PROJECT_REQUEST_FAIL, OPEN_PROJECT_REQUEST_SUCCESS, OPEN_PROJECT_START } from './action';

const initialState = {
    // 当前选择的目录
    selectedDirectory: '',

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
                selectedDirectory: data.selectedDirectory,
                errMsg: ''
            };
            break;

        case OPEN_PROJECT_REQUEST_FAIL:
            update = {
                selectedDirectory: '',
                errMsg: data.msg
            };
            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}


