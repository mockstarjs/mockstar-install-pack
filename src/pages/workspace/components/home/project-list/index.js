import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Divider, Modal, Popover, Table } from 'antd';

import './index.less';

class HomeProjectList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    handleGoProjectPage = (item) => {
        this.props.goProject(item.id);
    };

    handleStartOrStopProject = (item) => {
        if (item.isRunning) {
            this.props.stopProject(item.id);
        } else {
            this.props.startProject(item.id);
        }
    };

    handleRemoveProject = (item) => {
        console.log('--handleRemoveProject--', item);

        Modal.confirm({
            content: (
                <div>
                    <h2>确定要移除该项目么？</h2>

                    <dl>
                        <dt>描述</dt>
                        <dd>{item.description}</dd>
                    </dl>
                    <dl>
                        <dt>路径</dt>
                        <dd>{item.basePath}</dd>
                    </dl>

                </div>
            ),
            onOk: this.handleRemoveProjectConfirm.bind(this, item.id)
        });
    };

    handleRemoveProjectConfirm = (id) => {
        this.props.removeProject(id);
    };

    render() {
        const { isLoading, projects } = this.props;

        const columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '项目',
            key: 'description',
            render: (text, record) => {
                const tc = (
                    <div>{JSON.stringify(record, null, 2)}</div>
                );

                return (
                    <Popover content={tc}>
                        <div>{record.description}</div>
                    </Popover>
                );
            }
        }, {
            title: '服务地址',
            key: 'serviceURL',
            render: (text, record) => (
                <div className="ip-list-wrapper">
                    {
                        record.ipList.map((ip, ipIndex) => {
                            return (
                                <a key={ipIndex} href="javascript:;"
                                   onClick={this.handleGoProjectPage.bind(this, record)}>
                                    http://{ip}:{record.port}
                                </a>
                            );
                        })
                    }
                </div>
            )
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button
                        type={record.isRunning ? 'danger' : 'primary'}
                        onClick={this.handleStartOrStopProject.bind(this, record)}>
                        {record.isRunning ? '关闭' : '启动'}服务
                    </Button>
                    <Divider type="vertical" />
                    <Button onClick={this.handleGoProjectPage.bind(this, record)}>进入使用</Button>
                    <Divider type="vertical" />
                    <Button type="danger" onClick={this.handleRemoveProject.bind(this, record)}>移除</Button>
                </span>
            )
        }];

        return (
            <div className="page-home-project-list">
                <Table
                    rowKey="id"
                    loading={isLoading}
                    columns={columns}
                    dataSource={projects}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { localDBInfo, openProjectInfo } = state;

    return {
        isLoaded: localDBInfo.isLoaded,
        isLoading: localDBInfo.isLoading || openProjectInfo.isCmdRunning,
        projects: localDBInfo.projects
    };
}

export default connect(mapStateToProps)(HomeProjectList);
