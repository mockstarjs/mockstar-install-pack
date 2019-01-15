const path = require('path');
const { ipcMain } = require('electron');

const db = require('../db');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 保存打开的项目
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.SAVE_OPEN_PROJECT.REQ, (event, opts = {}) => {
    // 存储一份到本地缓存
    db.saveProject({
        name: path.basename(opts.basePath),
        description: opts.description,
        port: opts.port,
        basePath: opts.basePath
    }, (data) => {
        event.sender.send(EVENT.SAVE_OPEN_PROJECT.RSP, {
            retcode: 0,
            result: data
        }, opts);
    });
});
