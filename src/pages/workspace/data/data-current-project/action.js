import { EVENT } from '../../../../business/electron-main-render-common';
import { CALL_ELECTRON_REQUEST } from '../../../../middlewares/electron-request';

export const CURRENT_PROJECT_REQUEST = 'CURRENT_PROJECT_REQUEST';
export const CURRENT_PROJECT_REQUEST_SUCCESS = 'CURRENT_PROJECT_REQUEST_SUCCESS';
export const CURRENT_PROJECT_REQUEST_FAIL = 'CURRENT_PROJECT_REQUEST_FAIL';

function fetchCurrentProjectData(projectId) {
    return {
        [CALL_ELECTRON_REQUEST]: {
            types: [CURRENT_PROJECT_REQUEST, CURRENT_PROJECT_REQUEST_SUCCESS, CURRENT_PROJECT_REQUEST_FAIL],
            reqEvent: EVENT.CURRENT_PROJECT_INFO.REQ,
            rspEvent: EVENT.CURRENT_PROJECT_INFO.RSP,
            data: {
                id: projectId
            },
            _debug: require('../../../../business/mock/current-project')(projectId)
        }
    };
}

export function loadCurrentProjectData(projectId) {
    return (dispatch) => {
        return dispatch(fetchCurrentProjectData(projectId));
    };
}
