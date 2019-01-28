const path = require('path');
const { ipcMain, dialog } = require('electron');
const fse = require('fs-extra');
const { initProject } = require('mockstar-generators');

const db = require('../db');

const { EVENT } = require('../../src/business/electron-main-render-common');

/**
 * 创建项目
 *
 * @param {Object} event 事件对象
 * @param {Object} [opts] 额外的参数，用于处理某些逻辑
 */
ipcMain.on(EVENT.CREATE_PROJECT.REQ, (event, opts = {}) => {
    // 初始化
    initProject({
        isDev: false,
        autoInstall: true,
        parentPath: opts.parentPath,
        name: opts.name,
        port: opts.port
    })
        .then((data) => {
            // console.log(data);
            // TODO 临时测试
            fse.outputJsonSync(path.join(__dirname, '../../tmp/create-project.json'), {
                retcode: 0,
                result: opts
            });

            // 存储一份到本地缓存
            db.saveProject({
                name: opts.name,
                description: opts.description,
                port: opts.port,
                basePath: path.join(opts.parentPath, opts.name)
            });

            return {
                retcode: 0,
                result: opts
            };
        })
        .catch((err) => {
            console.error(err);
            return {
                retcode: -1,
                msg: err
            };
        })
        .then((data) => {
            // console.log(data);
            event.sender.send(EVENT.CREATE_PROJECT.RSP, data, opts);
        });
});
