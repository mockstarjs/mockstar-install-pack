import _ from 'lodash';

import {
    CREATE_PROJECT_GO_STEP1,
    CREATE_PROJECT_SAVE_REQUEST_SUCCESS,
    CREATE_PROJECT_SAVE_STEP1_SUCCESS,
    CREATE_PROJECT_START
} from './action';

const initialState = {
    // 父级目录
    parentPath: '/Users/helinjiang/gitprojects/now-h5-shake-redpacket',

    // 当前第几步
    curStep: 0,

    // 项目名称，必须符合文件夹命名规范
    name: 'mockstar-app',

    // 项目中文名称
    description: 'now-h5-shake-redpacket',

    // 指定端口号，1024-65535
    port: 9527,

    // 要在界面反馈的错误信息，可以是字符串，也可以是字符串数组
    errMsg: ''
};

const cloneInitialState = _.cloneDeep(initialState);

export default function createProjectInfo(state = initialState, action) {
    const { type, data } = action;
    let update = {};

    switch (type) {
        case CREATE_PROJECT_START:
            update = cloneInitialState;
            break;

        case CREATE_PROJECT_SAVE_STEP1_SUCCESS:
            update = {
                parentPath: data.parentPath,
                name: data.name,
                description: data.description,
                port: data.port,
                errMsg: '',
                curStep: 1
            };
            break;

        case CREATE_PROJECT_GO_STEP1:
            update = {
                curStep: 0
            };
            break;

        case CREATE_PROJECT_SAVE_REQUEST_SUCCESS:
            update = {
                curStep: 3
            };
            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}


