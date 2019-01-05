import { combineReducers } from 'redux';

import { projectInfo } from '../data/data-project';
import { localDBInfo } from '../data/data-local-db';
import { createProjectInfo } from '../pages/workspace/data/data-create-project';
import { currentProjectInfo } from '../pages/workspace/data/data-current-project';

const rootReducer = combineReducers({
    projectInfo,
    localDBInfo,
    createProjectInfo,
    currentProjectInfo
});

export default rootReducer;
