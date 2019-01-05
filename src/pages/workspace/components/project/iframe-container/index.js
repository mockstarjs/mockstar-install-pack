import React, { Component } from 'react';
import { connect } from 'react-redux';

import Iframe from '../../../../../components/react-iframe';

import './index.less';

class HomeProjectList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        const { isLoaded, port } = this.props.currentProjectInfo;

        if (!isLoaded) {
            return null;
        }

        return (
            <div className="page-workspace-project-iframe-container">
                <Iframe
                    className="iframe"
                    allow={'true'}
                    url={`http://127.0.0.1:${port}`}
                    width="100%"
                    height="110%"
                />
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

export default connect(mapStateToProps)(HomeProjectList);
