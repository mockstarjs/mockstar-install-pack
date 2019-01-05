import { EVENT } from '../../../../business/electron-main-render-common';

export const PROJECT_REQUEST = 'PROJECT_REQUEST';
export const PROJECT_REQUEST_SUCCESS = 'PROJECT_REQUEST_SUCCESS';
export const PROJECT_REQUEST_FAIL = 'PROJECT_REQUEST_FAIL';

export const CREATE_NEW_PROJECT_SAVE_STEP1_SUCCESS = 'CREATE_NEW_PROJECT_SAVE_STEP1_SUCCESS';
export const CREATE_NEW_PROJECT_SAVE_STEP1_FAIL = 'CREATE_NEW_PROJECT_SAVE_STEP1_FAIL';

export function loadProject() {
    return (dispatch, getState) => {
        // 开始请求
        dispatch({
            type: PROJECT_REQUEST
        });

        return new Promise((resolve, reject) => {
            // 如果 window.require is undefined 则立即停止
            if (!window.require) {
                dispatch({
                    type: PROJECT_REQUEST_FAIL,
                    data: 'window.require is undefined!'
                });

                return reject({
                    retcode: 10086,
                    msg: 'window.require is undefined!'
                });
            }

            const { ipcRenderer } = window.require('electron');

            // 请求打开文件夹对话框
            ipcRenderer.send(EVENT.CREATE_PROJECT_STEP1.REQ);

            // 监听选择的文件夹路径
            ipcRenderer.once(EVENT.CREATE_PROJECT_STEP1.RSP, (event, data, opts) => {
                if (data.retcode === 0) {
                    dispatch({
                        type: PROJECT_REQUEST_SUCCESS,
                        data: data
                    });

                    resolve(data);
                } else {
                    dispatch({
                        type: PROJECT_REQUEST_FAIL,
                        data: data
                    });

                    reject(data);
                }
            });
        });
    };
}

export function saveStep1(data) {
    // 校验当前目录下是否已经存在重名的文件，如果存在，则阻止，否则容易发生覆盖
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            // 如果 window.require is undefined 则立即停止
            if (!window.require) {
                dispatch({
                    type: CREATE_NEW_PROJECT_SAVE_STEP1_FAIL,
                    data: 'window.require is undefined!'
                });

                return reject({
                    retcode: 10086,
                    msg: 'window.require is undefined!'
                });
            }

            const { ipcRenderer } = window.require('electron');

            // 请求校验
            ipcRenderer.send(EVENT.CHECK_CREATE_NEW_PROJECT_STEP1.REQ, {
                createProjectInfo: getState().createProjectInfo,
                data
            });

            // 监听校验结果
            ipcRenderer.once(EVENT.CHECK_CREATE_NEW_PROJECT_STEP1.RSP, (event, data, opts) => {
                if (data.retcode === 0) {
                    dispatch({
                        type: CREATE_NEW_PROJECT_SAVE_STEP1_SUCCESS,
                        data: data
                    });

                    resolve(data);
                } else {
                    dispatch({
                        type: CREATE_NEW_PROJECT_SAVE_STEP1_FAIL,
                        data: data.msg || data
                    });

                    reject(data);
                }
            });
        });
    };
}