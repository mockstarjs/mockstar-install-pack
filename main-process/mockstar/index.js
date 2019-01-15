'use strict';

const path = require('path');
const mockstarLocalServer = require('mockstar-local-server');

/**
 * 启动本地服务
 *
 * @param {String} nsRootPath 子项目的根路径
 */
function startServer(nsRootPath) {
    const mockStarConfig = require(path.join(nsRootPath, './mockstar.config'));

    // 启动服务
    mockstarLocalServer.startServer(mockStarConfig, (isSuccess, data) => {
        // 启动结果
        if (isSuccess) {
            console.log('Local server start success!', data);
        } else {
            console.log('Local server start failed!', data);
        }
    });
}

/**
 *
 * @param {String} projectPath 项目根目录
 * @param {Function} [callback] 回调，第一个参数是 isError
 */
function start(projectPath, callback) {
    // console.log(args);
    // console.log(process.argv);
    // console.log(process.argv.slice(3));

    console.log('---- projectPath---', projectPath);

    startServer(projectPath);

    // shell.cd(projectPath);

    // const a = shell.exec('npm run start');
    // const a = shell.exec('matman -v');

    // console.log('---- a---', a);
    //
    // if (typeof callback === 'function') {
    //     callback(a && a.code !== 0);
    // }
}

module.exports = {
    start
};

// start('/Users/helinjiang/gitprojects/now-h5-shake-redpacket/mockstar-app')