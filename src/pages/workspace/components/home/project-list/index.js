import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Divider, Modal, Table } from 'antd';

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

    handleStartProject = (item) => {
        this.props.startProject(item.id);
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
            title: '名字',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '描述',
            dataIndex: 'description',
            key: 'description'
        }, {
            title: '预分配端口',
            dataIndex: 'port',
            key: 'port'
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button onClick={this.handleStartProject.bind(this, record)}> 关闭/启动</Button>
                    <Divider type="vertical" />
                    <Button onClick={this.handleGoProjectPage.bind(this, record)}>编辑</Button>
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
    const { localDBInfo } = state;

    return {
        isLoaded: localDBInfo.isLoaded,
        isLoading: localDBInfo.isLoading,
        projects: localDBInfo.projects
    };
}

export default connect(mapStateToProps)(HomeProjectList);
