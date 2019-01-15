const fs = require('fs');
const path = require('path');
const { ipcMain, dialog } = require('electron');

const db = require('../db');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 获得项目的信息
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.OPEN_PROJECT.REQ, (event, opts) => {
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }, (files) => {
        // 注意 files 为只有一个元素的数组，但选择文件夹时只能单选，因此此处直接返回第一个元素即可
        if (!files || !files.length) {
            event.sender.send(EVENT.OPEN_PROJECT.RSP, {
                retcode: -1,
                msg: '没有选择目录！'
            }, opts);

            return;
        }

        // 取数组第一个值
        const selectedDirectory = files[0];

        // 注意，选择的文件目录不一定是 mockstar 项目
        if (!fs.existsSync(path.join(selectedDirectory, 'mockstar.config.js'))) {
            event.sender.send(EVENT.OPEN_PROJECT.RSP, {
                retcode: -2,
                msg: '当前选择的项目不是 mockstar 项目！'
            }, opts);

            return;
        }

        // 检查下当前项目是不是已经在缓存中了
        const existProject = db.getProjectByPath(selectedDirectory);

        event.sender.send(EVENT.OPEN_PROJECT.RSP, {
            retcode: 0,
            result: {
                selectedDirectory: selectedDirectory,
                showDlg: !existProject,
                existProject: existProject
            }
        }, opts);
    });
});
