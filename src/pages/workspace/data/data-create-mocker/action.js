export const CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS = 'CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS';
export const CREATE_NEW_MOCKER_SAVE_STEP1_FAIL = 'CREATE_NEW_MOCKER_SAVE_STEP1_FAIL';

export function saveStep1(data) {
    return {
        type: CREATE_NEW_MOCKER_SAVE_STEP1_SUCCESS,
        data: data
    };
}