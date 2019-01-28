const { ipcMain } = require('electron');

const mockstar = require('../mockstar');
const db = require('../db');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 停止项目
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.MOCKSTAR_STOP.REQ, (event, opts) => {
    const project = db.getProjectById(opts.id);

    mockstar.stop(project.basePath, (isError) => {
        event.sender.send(EVENT.MOCKSTAR_STOP.RSP, {
            retcode: isError ? -1 : 0,
            result: project
        }, opts);
    });

});
