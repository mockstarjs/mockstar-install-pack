import { CREATE_NEW_MOCKER_GO_STEP1, CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS } from './action';
import _ from 'lodash';

const initialState = {
    // 父级目录
    parentPath: '/Users/helinjiang/tmp-project-master',

    // 当前第几步
    curStep: 1,

    // mocker config 信息
    mockerConfig: {
        // 名字，英文名字，以此作为文件夹命名
        name: '',

        // 路由，只有匹配到这个路由，才会被处理
        route: '',

        // 额外的路由匹配参数
        routeExtra: '',

        // 简要描述
        description: '我是一句话描述',

        // 是否禁用
        disable: false,

        // http 请求方式，包括 get(默认) 和 post
        method: 'get',

        // 数据mock类型，包括 xhr(默认) 和 async
        plugin: 'xhr',

        // 管理后台列表中排序的权重，值越大则越排在前面
        priority: 0,

        // 管理后台用到的标签，用于过滤，字符串数组
        tags: []
    },

    // 输入缓存信息
    inputInfo: {
        // 请求地址
        requestURL: '',

        // 额外路由匹配参数，格式为 a=1&b=3
        routeExtraStr: '',

        // 是否初始化 README 文件
        isInitReadme: true
    },

    // 要在界面反馈的错误信息，可以是字符串，也可以是字符串数组
    errMsg: ''
};

export default function createMockerInfo(state = initialState, action) {
    const { type, data } = action;
    let update = {};

    switch (type) {
        case CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS:
            update = {
                mockerConfig: _.merge({}, state.mockerConfig, {
                    plugin: data.plugin,
                    description: data.description
                }),
                errMsg: '',
                curStep: 1
            };
            break;

        case CREATE_NEW_MOCKER_GO_STEP1:
            update = {
                curStep: 0
            };
            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}


