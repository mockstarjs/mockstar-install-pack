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
        // const { isLoaded, isSuccess, data } = this.props;
        // const { projectFolder, startkitConfig } = data;

        const loading = false;
        const dataSource = [{
            id: 1,
            title: 'title',
            description: 'description'
        },{
            id: 2,
            title: 'title2',
            description: 'description2'
        },{
            id: 3,
            title: 'title3',
            description: 'description3'
        },{
            id: 4,
            title: 'title4',
            description: 'description4'
        }];

        return (
            <div className="page-home-project-list">
                <List
                    rowKey="id"
                    loading={loading}
                    grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
                    dataSource={dataSource}
                    renderItem={item =>
                        <List.Item key={item.id}>
                            <Card hoverable actions={[<a>操作一</a>, <a>操作二</a>]}>
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
    const { projectInfo } = state;

    return {
        isLoaded: projectInfo.isLoaded,
        isSuccess: projectInfo.isSuccess,
        data: projectInfo.data
    };
}

export default connect(mapStateToProps)(HomeProjectList);
