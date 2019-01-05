import { LOCAL_DB_REQUEST, LOCAL_DB_REQUEST_FAIL, LOCAL_DB_REQUEST_SUCCESS } from './action';

const initialState = {
    // 是否已加载完成
    isLoaded: false,

    // 是否正在加载数据
    isLoading: false,

    // 要在界面反馈的错误信息，可以是字符串，也可以是字符串数组
    errMsg: '',

    data: {}
};

function mockerInfo(state = initialState, action) {
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
                data: data
            };
            break;

        case LOCAL_DB_REQUEST_FAIL:
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

export default mockerInfo;

