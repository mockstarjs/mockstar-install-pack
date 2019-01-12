const path = require('path');
const { ipcMain, dialog } = require('electron');
const fse = require('fs-extra');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 获得项目的信息
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.CREATE_MOCKER.REQ, (event, opts) => {
    const data = require(path.join(__dirname, '../../src/business/mock/create-mocker-result'))(opts);

    fse.outputJsonSync(path.join(__dirname, '../../tmp/create-mocker.json'), data);

    event.sender.send(EVENT.CREATE_MOCKER.RSP, {
        retcode: 0,
        result: data.result
    }, opts);
});
