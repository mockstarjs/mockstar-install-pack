const { ipcMain } = require('electron');

const mockstar = require('../mockstar');
const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 获得项目信息
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.MOCKSTAR_STATUS.REQ, (event, opts) => {

    mockstar.getStatus(function (isPidRunning, config) {
        event.sender.send(EVENT.MOCKSTAR_STATUS.RSP, {
            retcode: 0,
            result: isPidRunning ? config : {}
        }, opts);
    });

});
