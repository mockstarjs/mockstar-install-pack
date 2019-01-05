export const CALL_ELECTRON_REQUEST = 'Call Electron Request';

const STATUS = 'storeStatus';

export default store => next => action => {
    /**
     * opts 字段说明：
     *  reqEvent: 发出请求的事件名
     *  rspEvent: 接受回调的事件名
     *  types: action的type值数组，按顺序依次代表: requestType, successType, failureType
     *  data: 请求的参数对象
     *  transferParam: 回传的参数，会随着请求返回而获得
     *
     * @type {{url:String, types:String[], type:String, data:Object}}
     */
    const opts = action[CALL_ELECTRON_REQUEST];

    // 如果没有启用该中间件，则不处理
    if (typeof opts === 'undefined') {
        return next(action);
    }

    // 二次处理请求的opts中的参数
    const { reqEvent, rspEvent, transferParam } = opts;
    const [requestType, successType, failureType] = opts.types;

    /**
     * 获得新的触发action
     * @param {Object} _action
     * @param {String} _action.type 请求结果的类型
     * @param {Object} [_action.data] 请求成功的结果
     * @param {Object} [_action.error] 请求出错时的错误
     * @param {Object} [_action.transferParam] 回传的参数
     * @returns {Object} 新的action
     */
    function actionWith(_action) {
        // 合并获得新的 action
        let finalAction = Object.assign({}, action, _action);

        //'wait' 'fetching' 'success' 'fail'
        let obj = {};

        switch (finalAction.type) {
            case successType:
                obj[STATUS] = 'success';
                break;
            case failureType:
                obj[STATUS] = 'fail';
                break;
            default:
                obj[STATUS] = 'fetching';
                finalAction.data = {};
                break;
        }

        // 将 fetch 状态也放在 data 中
        finalAction.data = Object.assign(finalAction.data || {}, obj);

        // 记得删除当前的 CALL_ELECTRON_REQUEST，否则会重复处理
        delete finalAction[CALL_ELECTRON_REQUEST];

        // 返回
        return finalAction;
    }

    // 第一步
    // 在请求发送之前，首先会触发 request 的action，表示要发送请求了
    let reqData = Object.assign({}, opts.data);

    next(actionWith({
        type: requestType,
        data: reqData
    }));

    // 第二步
    // 发出请求
    return new Promise((resolve, reject) => {
        // 如果 window.require is undefined 则立即停止
        if (!window.require) {
            let finalAction = actionWith({
                type: failureType,
                error: {
                    retcode: 10086,
                    msg: 'window.require is undefined!'
                }
            });

            // 传递给下一个中间件
            next(finalAction);

            return Promise.reject(finalAction);
        }

        const { ipcRenderer } = window.require('electron');

        // 请求打开文件夹对话框
        ipcRenderer.send(reqEvent, reqData);

        // 监听选择的文件夹路径
        ipcRenderer.once(rspEvent, (event, resData, reqData) => {
            if (resData.retcode === 0) {
                // 成功
                let finalAction = actionWith({
                    type: successType,
                    data: resData,
                    transferParam
                });

                // 传递给下一个中间件
                next(finalAction);

                resolve(finalAction);

            } else {
                // 失败
                let finalAction = actionWith({
                    type: failureType,
                    data: resData
                });

                // 传递给下一个中间件
                next(finalAction);

                reject(finalAction);
            }
        });
    });
}
