import { combineReducers } from 'redux';

import { projectInfo } from '../data/data-project';
import { localDBInfo } from '../data/data-local-db';
import { createProjectInfo } from '../pages/workspace/data/data-create-project';
import { createMockerInfo } from '../pages/workspace/data/data-create-mocker';
import { currentProjectInfo } from '../pages/workspace/data/data-current-project';

const rootReducer = combineReducers({
    projectInfo,
    localDBInfo,
    createProjectInfo,
    createMockerInfo,
    currentProjectInfo
});

export default rootReducer;
