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
        const { isLoading, projects } = this.props;

        return (
            <div className="page-workspace-project-iframe-container">
                <Iframe url={'http://127.0.0.1:9527'} />
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
