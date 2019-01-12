const urlParse = require('url-parse');

export const CREATE_NEW_MOCKER_START = 'CREATE_NEW_MOCKER_START';

export const CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS = 'CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS';
export const CREATE_NEW_MOCKER_SAVE_STEP1_FAIL = 'CREATE_NEW_MOCKER_SAVE_STEP1_FAIL';
export const CREATE_NEW_MOCKER_GO_STEP1 = 'CREATE_NEW_MOCKER_GO_STEP1';

export const CREATE_NEW_MOCKER_SAVE_STEP2_SUCCESS = 'CREATE_NEW_MOCKER_SAVE_STEP2_SUCCESS';
export const CREATE_NEW_MOCKER_SAVE_STEP2_FAIL = 'CREATE_NEW_MOCKER_SAVE_STEP2_FAIL';
export const CREATE_NEW_MOCKER_GO_STEP2 = 'CREATE_NEW_MOCKER_GO_STEP2';

export const CREATE_NEW_MOCKER_SAVE_STEP3_SUCCESS = 'CREATE_NEW_MOCKER_SAVE_STEP3_SUCCESS';
export const CREATE_NEW_MOCKER_SAVE_STEP3_FAIL = 'CREATE_NEW_MOCKER_SAVE_STEP3_FAIL';
export const CREATE_NEW_MOCKER_GO_STEP3 = 'CREATE_NEW_MOCKER_GO_STEP3';

export const CREATE_NEW_MOCKER_SAVE_SUCCESS = 'CREATE_NEW_MOCKER_SAVE_SUCCESS';
export const CREATE_NEW_MOCKER_SAVE_FAIL = 'CREATE_NEW_MOCKER_SAVE_FAIL';

export function startCreateMocker() {
    return {
        type: CREATE_NEW_MOCKER_START
    };
}

export function saveStep1(data) {
    return {
        type: CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS,
        data: data
    };
}

export function goStep1() {
    return {
        type: CREATE_NEW_MOCKER_GO_STEP1
    };
}

export function saveStep2(data) {
    const { requestURL, method } = data;

    const urlParseResult = urlParse(requestURL);
    const pathname = urlParseResult.pathname;
    const name = pathname.split('/').pop().replace(/[\/|.]/g, '_');

    if (process.env.NODE_ENV !== 'production') {
        console.log('--urlParseResult--', urlParseResult);
    }

    return {
        type: CREATE_NEW_MOCKER_SAVE_STEP2_SUCCESS,
        data: {
            requestURL,
            method,
            name,
            pathname
        }
    };
}

export function goStep2() {
    return {
        type: CREATE_NEW_MOCKER_GO_STEP2
    };
}

export function saveStep3(data) {
    return {
        type: CREATE_NEW_MOCKER_SAVE_STEP3_SUCCESS,
        data: data
    };
}

export function goStep3() {
    return {
        type: CREATE_NEW_MOCKER_GO_STEP3
    };
}

export function loadCreateMocker(data) {
    return {
        type: CREATE_NEW_MOCKER_SAVE_SUCCESS,
        data: data
    };
}
