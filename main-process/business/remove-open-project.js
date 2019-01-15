const { ipcMain } = require('electron');

const db = require('../db');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 保存打开的项目
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.REMOVE_OPEN_PROJECT.REQ, (event, opts = {}) => {
    db.removeProjectById(opts.id);

    event.sender.send(EVENT.REMOVE_OPEN_PROJECT.RSP, {
        retcode: 0,
        result: opts
    }, opts);
});
