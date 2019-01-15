import { combineReducers } from 'redux';

import { projectInfo } from '../data/data-project';
import { localDBInfo } from '../data/data-local-db';
import { createProjectInfo } from '../pages/workspace/data/data-create-project';
import { openProjectInfo } from '../pages/workspace/data/data-open-project';
import { createMockerInfo } from '../pages/workspace/data/data-create-mocker';
import { currentProjectInfo } from '../pages/workspace/data/data-current-project';

const rootReducer = combineReducers({
    projectInfo,
    localDBInfo,
    createProjectInfo,
    openProjectInfo,
    createMockerInfo,
    currentProjectInfo
});

export default rootReducer;
