const urlParse = require('url-parse');

export const CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS = 'CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS';
export const CREATE_NEW_MOCKER_SAVE_STEP1_FAIL = 'CREATE_NEW_MOCKER_SAVE_STEP1_FAIL';
export const CREATE_NEW_MOCKER_GO_STEP1 = 'CREATE_NEW_MOCKER_GO_STEP1';

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

    console.log('=====path=====', getMockerNameFromURL(requestURL));

    return {
        type: CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS,
        data: data
    };
}

function getMockerNameFromURL(url) {
    const urlParseResult = urlParse(url);

    // return urlParseResult.pathname.replace(/[\/|.]/g,'_');
    return urlParseResult.pathname.split('/').pop().replace(/[\/|.]/g, '_');
}

