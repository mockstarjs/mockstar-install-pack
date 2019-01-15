import { CALL_ELECTRON_REQUEST } from '../../../../middlewares/electron-request';
import { EVENT } from '../../../../business/electron-main-render-common';

export const OPEN_PROJECT_START = 'OPEN_PROJECT_START';

export const OPEN_PROJECT_REQUEST = 'OPEN_PROJECT_REQUEST';
export const OPEN_PROJECT_REQUEST_SUCCESS = 'OPEN_PROJECT_REQUEST_SUCCESS';
export const OPEN_PROJECT_REQUEST_FAIL = 'OPEN_PROJECT_REQUEST_FAIL';

export const OPEN_PROJECT_HIDE_DLG = 'OPEN_PROJECT_HIDE_DLG';
export const OPEN_PROJECT_SAVE_LOCAL = 'OPEN_PROJECT_SAVE_LOCAL';

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

export function saveOpenProjectLocal() {
    return {
        type: OPEN_PROJECT_SAVE_LOCAL
    };
}