import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import IframeContainer from './iframe-container';

import './index.less';

class PageWorkspaceProject extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="page-workspace-project">
                <Header />
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
