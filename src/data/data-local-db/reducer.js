import {
    LOCAL_DB_REQUEST,
    LOCAL_DB_REQUEST_FAIL,
    LOCAL_DB_REQUEST_SUCCESS,
    MOCKSTAR_STATUS_REQUEST_SUCCESS
} from './action';

const initialState = {
    // 是否已加载完成
    isLoaded: false,

    // 是否正在加载数据
    isLoading: false,

    // 要在界面反馈的错误信息，可以是字符串，也可以是字符串数组
    errMsg: '',

    // 公共信息
    info: {},

    // 已有项目列表
    projects: [],

    msStatus: {
        options: {}
    }
};

export default function localDBInfo(state = initialState, action) {
    const { type, data } = action;
    let update = {};

    switch (type) {
        case LOCAL_DB_REQUEST:
            update = {
                isLoaded: false,
                isLoading: true
            };

            break;

        case LOCAL_DB_REQUEST_SUCCESS:
            update = {
                isLoaded: true,
                isLoading: false,
                info: data.info,
                projects: getNewProjects(state.msStatus, data.projects)
            };
            break;

        case LOCAL_DB_REQUEST_FAIL:
            update = {
                isLoaded: true,
                isLoading: false
            };
            break;

        case MOCKSTAR_STATUS_REQUEST_SUCCESS:
            update = {
                msStatus: data,
                projects: getNewProjects(data, state.projects)
            };

            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}

function getNewProjects(msStatus, projects) {
    return projects.map((item) => {
        // 如果列表中的根目录匹配了当前启动的，则设置下标记
        if (item.basePath === msStatus.options.rootPath) {
            item.isRunning = true;
        } else {
            item.isRunning = false;
        }

        return item;
    });
}