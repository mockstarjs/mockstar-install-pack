import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import IframeContainer from './iframe-container';

import './index.less';

class PageWorkspaceProject extends Component {
    componentDidMount() {

    }

    /**
     * 进入到创建 mocker 的页面
     */
    handleGoCreateMocker = () => {
        this.props.history.push(`${this.props.match.url}/create-mocker`);
    };

    render() {
        return (
            <div className="page-workspace-project">
                <Header goCreateMocker={this.handleGoCreateMocker} />
                <IframeContainer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { currentProjectInfo } = state;

    return {
        currentProjectInfo: currentProjectInfo
    };
}

export default connect(mapStateToProps)(PageWorkspaceProject);
