import { CALL_ELECTRON_REQUEST } from '../../../../middlewares/electron-request';
import { EVENT } from '../../../../business/electron-main-render-common';

export const OPEN_PROJECT_START = 'OPEN_PROJECT_START';

export const OPEN_PROJECT_REQUEST = 'OPEN_PROJECT_REQUEST';
export const OPEN_PROJECT_REQUEST_SUCCESS = 'OPEN_PROJECT_REQUEST_SUCCESS';
export const OPEN_PROJECT_REQUEST_FAIL = 'OPEN_PROJECT_REQUEST_FAIL';

export const OPEN_PROJECT_HIDE_DLG = 'OPEN_PROJECT_HIDE_DLG';

export const OPEN_PROJECT_SAVE_LOCAL = 'OPEN_PROJECT_SAVE_LOCAL';
export const OPEN_PROJECT_SAVE_LOCAL_SUCCESS = 'OPEN_PROJECT_SAVE_LOCAL_SUCCESS';
export const OPEN_PROJECT_SAVE_LOCAL_FAIL = 'OPEN_PROJECT_SAVE_LOCAL_FAIL';

export const OPEN_PROJECT_REMOVE_LOCAL = 'OPEN_PROJECT_REMOVE_LOCAL';
export const OPEN_PROJECT_REMOVE_LOCAL_SUCCESS = 'OPEN_PROJECT_REMOVE_LOCAL_SUCCESS';
export const OPEN_PROJECT_REMOVE_LOCAL_FAIL = 'OPEN_PROJECT_REMOVE_LOCAL_FAIL';

export const MOCKSTAR_START_REQUEST = 'MOCKSTAR_START_REQUEST';
export const MOCKSTAR_START_REQUEST_SUCCESS = 'MOCKSTAR_START_REQUEST_SUCCESS';
export const MOCKSTAR_START_REQUEST_FAIL = 'MOCKSTAR_START_REQUEST_FAIL';

export function startOpenProject() {
    return {
        type: OPEN_PROJECT_START
    };
}

function fetchOpenProject() {
    return {
        [CALL_ELECTRON_REQUEST]: {
            types: [OPEN_PROJECT_REQUEST, OPEN_PROJECT_REQUEST_SUCCESS, OPEN_PROJECT_REQUEST_FAIL],
            reqEvent: EVENT.OPEN_PROJECT.REQ,
            rspEvent: EVENT.OPEN_PROJECT.RSP,
            data: {},
            _debug: require('../../../../business/mock/open-project-result')()
        }
    };
}

export function loadOpenProject() {
    return (dispatch) => {
        // 如果是已经存在的项目，则直接进入到工作台，否则，弹出对话框补充一些基本信息
        return dispatch(fetchOpenProject());
    };
}

export function hideOpenProjectDlg() {
    return {
        type: OPEN_PROJECT_HIDE_DLG
    };
}

function fetchSaveOpenProject(data) {
    return {
        [CALL_ELECTRON_REQUEST]: {
            types: [OPEN_PROJECT_SAVE_LOCAL, OPEN_PROJECT_SAVE_LOCAL_SUCCESS, OPEN_PROJECT_SAVE_LOCAL_FAIL],
            reqEvent: EVENT.SAVE_OPEN_PROJECT.REQ,
            rspEvent: EVENT.SAVE_OPEN_PROJECT.RSP,
            data: data,
            _debug: require('../../../../business/mock/save-open-project-result')()
        }
    };
}

export function loadSaveOpenProject(data) {
    return (dispatch) => {
        return dispatch(fetchSaveOpenProject(data));
    };
}

function fetchRemoveOpenProject(id) {
    return {
        [CALL_ELECTRON_REQUEST]: {
            types: [OPEN_PROJECT_REMOVE_LOCAL, OPEN_PROJECT_REMOVE_LOCAL_SUCCESS, OPEN_PROJECT_REMOVE_LOCAL_FAIL],
            reqEvent: EVENT.REMOVE_OPEN_PROJECT.REQ,
            rspEvent: EVENT.REMOVE_OPEN_PROJECT.RSP,
            data: { id },
            _debug: require('../../../../business/mock/remove-open-project-result')()
        }
    };
}

export function loadRemoveOpenProject(id) {
    return (dispatch) => {
        return dispatch(fetchRemoveOpenProject(id));
    };
}

function fetchStartProject(id) {
    return {
        [CALL_ELECTRON_REQUEST]: {
            types: [MOCKSTAR_START_REQUEST, MOCKSTAR_START_REQUEST_SUCCESS, MOCKSTAR_START_REQUEST_FAIL],
            reqEvent: EVENT.MOCKSTAR_START.REQ,
            rspEvent: EVENT.MOCKSTAR_START.RSP,
            data: { id },
            _debug: require('../../../../business/mock/mockstart-start-result')()
        }
    };
}

export function loadStartProject(id) {
    return (dispatch) => {
        return dispatch(fetchStartProject(id));
    };
}