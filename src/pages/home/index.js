import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

import './index.less';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            folderPath: '',
            filePath: ''
        };
    }

    componentDidMount() {
        if (window.require) {
            const { ipcRenderer } = window.require('electron');

            ipcRenderer.on('selected-directory', (event, path, opts) => {
                console.log('-event-', event);
                console.log('-path-', path);
                console.log('-opts-', opts);
                this.setState({
                    folderPath: path
                });
            });

            ipcRenderer.on('selected-file', (event, path, opts) => {
                console.log('-event-', event);
                console.log('-path-', path);
                console.log('-opts-', opts);
                this.setState({
                    filePath: path
                });
            });
        }
    }

    handleOpenFolder = () => {
        console.log('===handleOpenFolder====');
        // window.ipcRenderer.send('open-file-dialog');
        if (window.require) {
            const { ipcRenderer } = window.require('electron');
            console.log(ipcRenderer);
            ipcRenderer.send('open-directory-dialog', { name: '22222' });
        } else {
            console.log('window.require is undefined!');
        }
    };

    handleOpenFile = () => {
        console.log('===handleOpenFile====');
        // window.ipcRenderer.send('open-file-dialog');
        if (window.require) {
            const { ipcRenderer } = window.require('electron');
            console.log(ipcRenderer);
            ipcRenderer.send('open-file-dialog', { name: 'file---' });
        } else {
            console.log('window.require is undefined!');
        }
    };

    render() {
        const { folderPath, filePath } = this.state;
        return (
            <div className="page-home text-content">
                <h2>HOME</h2>
                <p>欢迎使用！</p>

                <p>You selected: {folderPath}</p>
                <p>You selected: {filePath}</p>

                <Button size="large" type="primary">创建新项目</Button>
                <Button size="large" onClick={this.handleOpenFolder}>打开老项目</Button>
                <Button size="large" onClick={this.handleOpenFile}>打开老项目-文件</Button>
            </div>
        );
    }
}
