import { EVENT } from '../../business/electron-main-render-common';
import { CALL_ELECTRON_REQUEST } from '../../middlewares/electron-request';

export const LOCAL_DB_REQUEST = 'LOCAL_DB_REQUEST';
export const LOCAL_DB_REQUEST_SUCCESS = 'LOCAL_DB_REQUEST_SUCCESS';
export const LOCAL_DB_REQUEST_FAIL = 'LOCAL_DB_REQUEST_FAIL';

export const MOCKSTAR_STATUS_REQUEST = 'MOCKSTAR_STATUS_REQUEST';
export const MOCKSTAR_STATUS_REQUEST_SUCCESS = 'MOCKSTAR_STATUS_REQUEST_SUCCESS';
export const MOCKSTAR_STATUS_REQUEST_FAIL = 'MOCKSTAR_STATUS_REQUEST_FAIL';

function fetchLocalDBData() {
    return {
        [CALL_ELECTRON_REQUEST]: {
            types: [LOCAL_DB_REQUEST, LOCAL_DB_REQUEST_SUCCESS, LOCAL_DB_REQUEST_FAIL],
            reqEvent: EVENT.LOCAL_DB_INFO.REQ,
            rspEvent: EVENT.LOCAL_DB_INFO.RSP,
            data: {},
            _debug: require('../../business/mock/database')
        }
    };
}

/**
 * 获取本地数据库文件中缓存的所有信息
 */
export function loadLocalDBData() {
    return (dispatch) => {
        return dispatch(fetchLocalDBData());
    };
}

function fetchMockStarStatus() {
    return {
        [CALL_ELECTRON_REQUEST]: {
            types: [MOCKSTAR_STATUS_REQUEST, MOCKSTAR_STATUS_REQUEST_SUCCESS, MOCKSTAR_STATUS_REQUEST_FAIL],
            reqEvent: EVENT.MOCKSTAR_STATUS.REQ,
            rspEvent: EVENT.MOCKSTAR_STATUS.RSP,
            data: {},
            _debug: require('../../business/mock/mockstar-status-result')()
        }
    };
}

export function loadMockStarStatus() {
    return (dispatch) => {
        return dispatch(fetchMockStarStatus());
    };
}