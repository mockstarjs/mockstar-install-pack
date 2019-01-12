import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from 'antd';

import CreateByStep from './create-by-step';
import ErrorTips from './error-tips';

import Header from './header';

import './index.less';

class WorkspaceCreateNewProject extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    /**
     * 返回上一级，即返回到 mocker 操作页面
     */
    handleGoProjectHome = () => {
        // 返回上一级目录
        const arr = this.props.match.url.split('/');
        arr.pop();

        this.props.history.push(arr.join('/'));
    };

    render() {
        const { createMockerInfo } = this.props;
        const { errMsg } = createMockerInfo;

        return (
            <div className="page-workspace-project-create-mocker">
                <Header goProjectHome={this.handleGoProjectHome} />

                <div className="main-wrapper">
                    <Card bordered={false}>
                        <ErrorTips message={errMsg} />
                    </Card>

                    <Card bordered={false}>
                        <CreateByStep goProjectHome={this.handleGoProjectHome} />
                    </Card>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { createMockerInfo } = state;

    return {
        createMockerInfo: createMockerInfo
    };
}

export default connect(mapStateToProps)(WorkspaceCreateNewProject);
