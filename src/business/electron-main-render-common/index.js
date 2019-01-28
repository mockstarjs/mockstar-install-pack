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
    CREATE_PROJECT_SELECT_ROOT: {
        REQ: 'req-create-project-select-root',
        RSP: 'rsp-create-project-select-root'
    },
    SAVE_OPEN_PROJECT: {
        REQ: 'req-save-open-project',
        RSP: 'rsp-save-open-project'
    },
    SAVE_GLOBAL_SETTING: {
        REQ: 'req-save-global-setting',
        RSP: 'rsp-save-global-setting'
    },
    REMOVE_OPEN_PROJECT: {
        REQ: 'req-remove-open-project',
        RSP: 'rsp-remove-open-project'
    },
    OPEN_PROJECT: {
        REQ: 'req-open-project',
        RSP: 'rsp-open-project'
    },
    GLOBAL_SETTING: {
        REQ: 'req-global-setting',
        RSP: 'rsp-global-setting'
    },
    MOCKSTAR_START: {
        REQ: 'req-mockstar-start',
        RSP: 'rsp-mockstar-start'
    },
    MOCKSTAR_STOP: {
        REQ: 'req-mockstar-stop',
        RSP: 'rsp-mockstar-stop'
    },
    MOCKSTAR_STATUS: {
        REQ: 'req-mockstar-status',
        RSP: 'rsp-mockstar-status'
    },
    CREATE_MOCKER: {
        REQ: 'req-create-mocker',
        RSP: 'rsp-create-mocker'
    }
};

module.exports = {
    EVENT
};