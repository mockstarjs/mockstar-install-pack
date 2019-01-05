import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import ProjectList from './project-list';

import { loadLocalDBData } from '../../../../data/data-local-db';

import './index.less';

class PageWorkspaceHome extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="page-workspace-home">
                <Header />

                <ProjectList />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { projectInfo } = state;

    return {
        isLoaded: projectInfo.isLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadLocalDBData() {
            return dispatch(loadLocalDBData());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWorkspaceHome);
