import { CREATE_NEW_PROJECT_SAVE_STEP1_FAIL, CREATE_NEW_PROJECT_SAVE_STEP1_SUCCESS } from './action';
import _ from 'lodash';

const initialState = {
    // 父级目录
    parentPath: '/Users/helinjiang/tmp-project-master',

    // 当前第几步
    curStep: 0,

    // 项目基础信息
    basicInfo: {
        // 项目 owner
        rtxName: 'linjianghe',

        // 项目名
        name: 'now-demo-ivweb-startkit',

        // 项目的中文别称
        nickName: '脚手架 ivweb-startkit 样例',

        // 项目描述信息
        description: 'ivweb 团队基于 webpack3 + React 16 + Redux3的通用化脚手架项目的样例',

        // 版本号
        version: '0.1.0',
    },

    // 要在界面反馈的错误信息，可以是字符串，也可以是字符串数组
    errMsg: '',

    data: {}
};

function mockerInfo(state = initialState, action) {
    const { type, data } = action;
    let update = {};

    switch (type) {
        case CREATE_NEW_PROJECT_SAVE_STEP1_SUCCESS:
            update = {
                basicInfo: _.merge({}, state.basicInfo, data),
                errMsg: '',
                curStep: 1
            };

            break;

        case CREATE_NEW_PROJECT_SAVE_STEP1_FAIL:
            update = {
                errMsg: data,
                curStep: 0
            };
            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}

export default mockerInfo;

