'use strict';

const path = require('path');
const spawn = require('cross-spawn');
const shell = require('shelljs');
const starting = require('mockstar-starting');

/**
 *
 * @param {String} projectPath 项目根目录
 * @param {Function} [callback] 回调，第一个参数是 isError
 */
function start(projectPath, callback) {
    // 进入到指定路径
    shell.cd(projectPath);

    // 启动服务
    const command = spawn('npm', ['start']);

    _dealCmdCallback(command, (code, data) => {
        if (code !== 0) {
            callback && callback(code, data);
            return;
        }

        let checkT;
        let count = 0;
        const check = function () {
            starting.getStatus(function (isPidRunning, config) {
                // 超时返回
                if (count > 10) {
                    clearTimeout(checkT);
                    count = 0;
                    callback && callback(-999, data);
                    return;
                }

                // 如果已经运行中，也返回
                if (isPidRunning) {
                    clearTimeout(checkT);
                    count = 0;
                    callback && callback(code, config);
                    return;
                }

                // 否则轮询检查
                count++;

                checkT = setTimeout(() => {
                    check();
                }, 600);
            });
        };

        check();
    });
}

/**
 *
 * @param {String} projectPath 项目根目录
 * @param {Function} [callback] 回调，第一个参数是 isError
 */
function stop(projectPath, callback) {
    // 进入到指定路径
    shell.cd(projectPath);

    // 停止服务
    const command = spawn('mockstar', ['stop']);

    _dealCmdCallback(command, callback);
}

function _dealCmdCallback(command, _callback) {
    const callback = (typeof _callback === 'function') ? _callback : () => {

    };

    // 打印输出
    let output = '';

    let errOutPut = '';

    // 成功信息
    command.stdout.on('data', (data) => {
        output += data;
    }).pipe(process.stdout);

    // 异常信息
    command.stderr.on('data', (data) => {
        output += data;
        errOutPut += data;
    }).pipe(process.stderr);

    // 运行结束
    command.on('close', (code) => {
        console.log({ code: code, data: errOutPut });
        // console.log({ code: code });

        // 如果 code 值不为0，则说明是非正常的
        // callback(code);
        callback(code, {
            pid: command.pid,
            output: output,
            errOutPut: errOutPut
        });
    });

    // 返回 pid，通知到前端页面：启动完成
    // 但这里并不意味着成功
    // console.log('---command--', command.pid);
    callback(0, {
        pid: command.pid
    });
}

module.exports = {
    start,
    stop,
    getStatus: starting.getStatus
};
