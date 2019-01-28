import reducer from './reducer';

export {
    loadOpenProject,
    startOpenProject,
    hideOpenProjectDlg,
    loadSaveOpenProject,
    loadRemoveOpenProject,
    loadStartProject,
    loadStopProject,
    loadGlobalSetting,
    hideGlobalSettingDlg,
    loadSaveGlobalSetting
}from './action';

export const openProjectInfo = reducer;