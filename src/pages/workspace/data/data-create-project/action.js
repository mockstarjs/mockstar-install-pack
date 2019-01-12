import { CALL_ELECTRON_REQUEST } from '../../../../middlewares/electron-request';
import { EVENT } from '../../../../business/electron-main-render-common';

export const CREATE_PROJECT_START = 'CREATE_PROJECT_START';

export const CREATE_PROJECT_SAVE_STEP1_SUCCESS = 'CREATE_PROJECT_SAVE_STEP1_SUCCESS';
export const CREATE_PROJECT_SAVE_STEP1_FAIL = 'CREATE_PROJECT_SAVE_STEP1_FAIL';
export const CREATE_PROJECT_GO_STEP1 = 'CREATE_PROJECT_GO_STEP1';

export const CREATE_PROJECT_SAVE_REQUEST = 'CREATE_PROJECT_SAVE_REQUEST';
export const CREATE_PROJECT_SAVE_REQUEST_SUCCESS = 'CREATE_PROJECT_SAVE_REQUEST_SUCCESS';
export const CREATE_PROJECT_SAVE_REQUEST_FAIL = 'CREATE_PROJECT_SAVE_REQUEST_FAIL';

export function startCreateProject() {
    return {
        type: CREATE_PROJECT_START
    };
}

export function saveStep1(data) {
    return {
        type: CREATE_PROJECT_SAVE_STEP1_SUCCESS,
        data: data
    };
}

export function goStep1() {
    return {
        type: CREATE_PROJECT_GO_STEP1
    };
}

function fetchCreateProject(data) {
    return {
        [CALL_ELECTRON_REQUEST]: {
            types: [CREATE_PROJECT_SAVE_REQUEST, CREATE_PROJECT_SAVE_REQUEST_SUCCESS, CREATE_PROJECT_SAVE_REQUEST_FAIL],
            reqEvent: EVENT.CREATE_PROJECT.REQ,
            rspEvent: EVENT.CREATE_PROJECT.RSP,
            data: data,
            _debug: require('../../../../business/mock/create-project-result')(data)
        }
    };
}

export function loadCreateProject(data) {
    return (dispatch) => {
        return dispatch(fetchCreateProject(data));
    };
}
