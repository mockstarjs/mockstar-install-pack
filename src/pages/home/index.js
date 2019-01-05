import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './components/home-header';
import ProjectList from './components/project-list';

import { loadLocalDBData } from './data/data-local-db';

import './index.less';

class Home extends Component {
    componentDidMount() {
        // 加载历史项目信息
        this.props.loadLocalDBData();
    }

    render() {
        return (
            <div className="page-home">
                <HomeHeader />

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
