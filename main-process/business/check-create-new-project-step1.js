const path = require('path');
const fs = require('fs');
const { ipcMain } = require('electron');

const { EVENT } = require('../../src/business/electron-main-render-common');


/**
 * 检查创建新项目第一步的参数
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.CHECK_CREATE_NEW_PROJECT_STEP1.REQ, (event, opts = {}) => {
    const { createProjectInfo, data } = opts;

    // 如果本地已经存在同名文件夹，则不能够创建，避免被覆盖
    if (!opts.isDev && fs.existsSync(path.join(createProjectInfo.parentPath, data.name))) {
        event.sender.send(EVENT.CHECK_CREATE_NEW_PROJECT_STEP1.RSP, {
            retcode: -1,
            msg: '已经存在同名文件夹，请移除已有文件夹，或者更换名字之后重试'
        }, opts);
    } else {
        const { rtxName } = data;


    }
});
