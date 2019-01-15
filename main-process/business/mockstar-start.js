const { ipcMain } = require('electron');

const mockstar = require('../mockstar');
const db = require('../db');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 启动项目
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.MOCKSTAR_START.REQ, (event, opts) => {
    const project = db.getProjectById(opts.id);

    console.log('---project--',project)

    mockstar.start(project.basePath, (isError) => {
        event.sender.send(EVENT.MOCKSTAR_START.RSP, {
            retcode: isError ? -1 : 0,
            result: project
        }, opts);
    });

});
