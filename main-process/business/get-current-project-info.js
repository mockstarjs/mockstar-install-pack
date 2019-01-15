const path = require('path');
const { ipcMain } = require('electron');

const db = require('../db');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 获得项目的信息
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.CURRENT_PROJECT_INFO.REQ, (event, opts) => {
    event.sender.send(EVENT.CURRENT_PROJECT_INFO.RSP, {
        retcode: 0,
        result: db.getProjectById(opts.id)
    }, opts);
});
