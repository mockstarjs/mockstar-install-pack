import { CURRENT_PROJECT_REQUEST, CURRENT_PROJECT_REQUEST_FAIL, CURRENT_PROJECT_REQUEST_SUCCESS } from './action';

const initialState = {
    // 是否已加载完成
    isLoaded: false,

    // 是否正在加载数据
    isLoading: false,

    // 要在界面反馈的错误信息，可以是字符串，也可以是字符串数组
    errMsg: '',

    id: 0,
    title: '',
    description: '',
    port: 0
};

export default function currentProjectInfo(state = initialState, action) {
    const { type, data } = action;
    let update = {};

    switch (type) {
        case CURRENT_PROJECT_REQUEST:
            update = {
                isLoaded: false,
                isLoading: true
            };

            break;

        case CURRENT_PROJECT_REQUEST_SUCCESS:
            update = {
                isLoaded: true,
                isLoading: false,
                ...data
            };
            break;

        case CURRENT_PROJECT_REQUEST_FAIL:
            update = {
                isLoaded: true,
                isLoading: false
            };
            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}


