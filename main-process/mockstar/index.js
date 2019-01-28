'use strict';

const path = require('path');
const spawn = require('cross-spawn');
const shell = require('shelljs');
const starting = require('mockstar-starting');

/**
 *
 * @param {String} projectPath 项目根目录
 * @param {Function} [_callback] 回调，第一个参数是 isError
 */
function start(projectPath, _callback) {
    console.log('\n\n---- projectPath---', projectPath);

    const callback = (typeof _callback === 'function') ? _callback : () => {

    };

    // 进入到指定路径
    shell.cd(projectPath);

    // const command = spawn('pm2', ['-v']);
    // const command = spawn('node', ['-v']);
    // const command = spawn('npm', ['-v']);
    const command = spawn('npm', ['start']);

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
    // 但这里并不意味着启动成功
    console.log('---command--', command.pid);
    callback(0, {
        pid: command.pid
    });
}

module.exports = {
    start,
    getStatus: starting.getStatus
};
