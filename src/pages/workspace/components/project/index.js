import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { loadCurrentProjectData } from '../../data/data-current-project';

// import HomeHeader from './components/home-header';
// import ProjectList from './components/project-list';

class PageWorkspaceProject extends Component {
    componentDidMount() {
        // 加载当前项目的信息
        this.props.loadCurrentProjectData(this.props.match.params.projectName);
    }

    render() {
        let { match } = this.props;

        return (
            <div className="page-workspace-project">
                <h2>hello, {match.params.projectName}</h2>
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
        loadCurrentProjectData(projectName) {
            return dispatch(loadCurrentProjectData(projectName));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWorkspaceProject);
