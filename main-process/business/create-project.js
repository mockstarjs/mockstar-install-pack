const path = require('path');
const { ipcMain, dialog } = require('electron');
const fse = require('fs-extra');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 创建项目
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.CREATE_PROJECT.REQ, (event, opts) => {
    const data = require(path.join(__dirname, '../../src/business/mock/create-project-result'))(opts);

    fse.outputJsonSync(path.join(__dirname, '../../tmp/create-project.json'), data);

    event.sender.send(EVENT.CREATE_PROJECT.RSP, {
        retcode: 0,
        result: data.result
    }, opts);
});
