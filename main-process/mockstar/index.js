'use strict';

const path = require('path');
const spawn = require('cross-spawn');
const shell = require('shelljs');

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

function test() {
    const command = spawn('npm', ['-v']);

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
    });

    // 返回 pid，通知到前端页面：启动完成
    // 但这里并不意味着启动成功
    console.log('---command--', command.pid);

    // console.log(shell.exec('lsof -i:9527'))
    // console.log('\n\n')
    // console.log(shell.exec('lsof -i:9420'))

    // { [String: 'COMMAND  PID       USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME\nnode    7828 helinjiang   14u  IPv6 0x80549f8fd378cb95      0t0  TCP *:9527 (LISTEN)\n']
    //     stdout: 'COMMAND  PID       USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME\nnode    7828 helinjiang   14u  IPv6 0x80549f8fd378cb95      0t0  TCP *:9527 (LISTEN)\n',
    //         stderr: '',
    //     code: 0,
    //     cat: [Function: bound ],
    //     exec: [Function: bound ],
    //     grep: [Function: bound ],
    //     head: [Function: bound ],
    //     sed: [Function: bound ],
    //     sort: [Function: bound ],
    //     tail: [Function: bound ],
    //     to: [Function: bound ],
    //     toEnd: [Function: bound ],
    //     uniq: [Function: bound ] }
    console.log(shell.exec('lsof -i:9527'))
    console.log('\n\n')
    console.log(shell.exec('lsof -i:8899'))
}

function isPortUsed(port){

}

module.exports = {
    start
};

// start('/Users/helinjiang/gitprojects/now-h5-shake-redpacket/mockstar-app')
test();