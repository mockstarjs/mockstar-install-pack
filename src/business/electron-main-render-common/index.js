/**
 * 事件名
 * @type {Object}
 */
const EVENT = {
    PROJECT_INFO: {
        REQ: 'req-project-info',
        RSP: 'rsp-project-info'
    },
    CHECK_CREATE_NEW_PROJECT_STEP1: {
        REQ: 'req-check-create-new-project-step1',
        RSP: 'rsp-check-create-new-project-step1'
    },
    LOCAL_DB_INFO: {
        REQ: 'req-local-db-info',
        RSP: 'rsp-local-db-info'
    },
    CURRENT_PROJECT_INFO: {
        REQ: 'req-current-project-info',
        RSP: 'rsp-current-project-info'
    },
    CREATE_PROJECT: {
        REQ: 'req-create-project',
        RSP: 'rsp-create-project'
    },
    SAVE_OPEN_PROJECT: {
        REQ: 'req-save-open-project',
        RSP: 'rsp-save-open-project'
    },
    REMOVE_OPEN_PROJECT: {
        REQ: 'req-remove-open-project',
        RSP: 'rsp-remove-open-project'
    },
    OPEN_PROJECT: {
        REQ: 'req-open-project',
        RSP: 'rsp-open-project'
    },
    CREATE_MOCKER: {
        REQ: 'req-create-mocker',
        RSP: 'rsp-create-mocker'
    }
};

module.exports = {
    EVENT
};