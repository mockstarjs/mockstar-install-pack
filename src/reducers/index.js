import { combineReducers } from 'redux';

import { projectInfo } from '../data/data-project';
import { createProjectInfo } from '../pages/workspace/data/data-create-project';

const rootReducer = combineReducers({
    projectInfo,
    createProjectInfo
});

export default rootReducer;
