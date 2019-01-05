import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, List } from 'antd';

import { Ellipsis } from 'ant-design-pro';

import './index.less';

class HomeProjectList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        const { isLoading, projects } = this.props;

        return (
            <div className="page-home-project-list">
                <List
                    rowKey="id"
                    loading={isLoading}
                    grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
                    dataSource={projects}
                    renderItem={item =>
                        <List.Item key={item.id}>
                            <Card hoverable actions={[<a>关闭/启动</a>, <a>编辑</a>]}>
                                <Card.Meta
                                    title={<a>{item.title}</a>}
                                    description={
                                        <Ellipsis lines={3}>
                                            {item.description}
                                        </Ellipsis>
                                    }
                                />
                            </Card>
                        </List.Item>
                    }
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
