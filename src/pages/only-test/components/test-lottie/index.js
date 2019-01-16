import React, { Component } from 'react';

import { Button, Divider, Table } from 'antd';
import './index.less';

export default class TestLottie extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            list: []
        };
    }

    componentDidMount() {
        // const { BrowserWindow } = window.require('electron').remote;
        // const ipcRenderer = window.require('electron').ipcRenderer;
        // const path = window.require('path');
        //
        // const invisMsgBtn = document.getElementById('invis-msg');
        // const invisReply = document.getElementById('invis-reply');
        //
        //
        // ipcRenderer.on('factorial-computed', (event, input, output) => {
        //     const message = `The factorial of ${input} is ${output}`;
        //     invisReply.textContent = message;
        // });

    }

    handleClick = () => {
        this.getData('https://www.qq.com', false)
            .then((data) => {
                console.log('========', data);
                data.index = this.state.list.length;

                this.setState({
                    list: [...this.state.list, data]
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    handleClickMulti = () => {
        this.getData('http://now.qq.com/demo/lottie/index.html?now_n_http=1&blob=1', true)
            .then((data) => {
                console.log('========', data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    getData(url, isShow) {
        return new Promise((resolve, reject) => {
            // console.log('--handleClick--', window.require('path'));
            const retData = {};

            const opts = {
                show: isShow,
                webPreferences: {
                    nodeIntegration: false
                }
            };

            if (isShow) {
                opts.width = 1000;
                opts.height = 600;
            }

            // const windowID = BrowserWindow.getFocusedWindow().id;
            const { BrowserWindow } = window.require('electron').remote;

            let win = new BrowserWindow(opts);

                if (isShow) {
                    win.openDevTools();
                }

                win.loadURL(url);


            win.webContents.on('did-finish-load', () => {
                // const input = 100;
                // win.webContents.send('compute-factorial', input, windowID);

                // 如果有先去跳转的场景，则此处会触发两次，因此获取 cookie 时需要先核对域名
                retData.url = win.webContents.getURL();
                retData.title = win.webContents.getTitle();

                win.webContents.executeJavaScript('JSON.stringify(performance.getEntries().filter((v)=>{return v.initiatorType == \'xmlhttprequest\'}))', (result) => {
                    retData.cookie = result;

                    console.log('------retData----', retData);

                    // listen for console.log
                    // var defaultLog = window.reportTime;
                    // window.reportTime = function () {
                    //
                    //     console.log('========1111=========', arguments);
                    //
                    //     return defaultLog.apply(this, arguments);
                    // };

                    resolve(retData);
                });

            });
        });

    }

    getData2(url, isShow) {
        return new Promise((resolve, reject) => {
            // console.log('--handleClick--', window.require('path'));
            const retData = {};

            const opts = {
                show: isShow,
                webPreferences: {
                    nodeIntegration: false
                }
            };

            if (isShow) {
                opts.width = 1000;
                opts.height = 600;
            }

            // const windowID = BrowserWindow.getFocusedWindow().id;
            const { BrowserWindow } = window.require('electron').remote;

            let win = new BrowserWindow(opts);

            win.webContents.session.setProxy({ proxyRules: 'http=127.0.0.1:8080' }, function () {
                if (isShow) {
                    win.openDevTools();
                }

                win.loadURL(url);
            });

            win.webContents.on('did-finish-load', () => {
                // const input = 100;
                // win.webContents.send('compute-factorial', input, windowID);

                // 如果有先去跳转的场景，则此处会触发两次，因此获取 cookie 时需要先核对域名
                retData.url = win.webContents.getURL();
                retData.title = win.webContents.getTitle();

                win.webContents.executeJavaScript('document.cookie', (result) => {
                    retData.cookie = result;

                    console.log('------retData----', retData);

                    // listen for console.log
                    // var defaultLog = window.reportTime;
                    // window.reportTime = function () {
                    //
                    //     console.log('========1111=========', arguments);
                    //
                    //     return defaultLog.apply(this, arguments);
                    // };

                    resolve(retData);
                });

            });
        });

    }

    render() {
        const { list } = this.state;

        const columns = [{
            title: '序号',
            dataIndex: 'index',
            key: 'index'
        }, {
            title: '网站标题',
            dataIndex: 'title',
            key: 'title'
        }, {
            title: '网站地址',
            dataIndex: 'url',
            key: 'url'
        }];

        return (
            <div className="page-test-handle-other-site">
                <Button onClick={this.handleClick}>测试打开1次 www.qq.com</Button>
                <Button onClick={this.handleClickMulti}>测试打开3次 www.qq.com</Button>

                <Divider />

                <Table
                    rowKey="index"
                    dataSource={list}
                    columns={columns}
                />
            </div>
        );
    }
}
