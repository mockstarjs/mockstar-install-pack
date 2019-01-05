import { combineReducers } from 'redux';

import { projectInfo } from '../data/data-project';
import { createProjectInfo } from '../pages/workspace/data/data-create-project';
import { localDBInfo } from '../pages/home/data/data-local-db';

const rootReducer = combineReducers({
    projectInfo,
    createProjectInfo,
    localDBInfo
});

export default rootReducer;
