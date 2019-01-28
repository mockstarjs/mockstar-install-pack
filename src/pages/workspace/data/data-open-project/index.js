import reducer from './reducer';

export {
    loadOpenProject,
    startOpenProject,
    hideOpenProjectDlg,
    loadSaveOpenProject,
    loadRemoveOpenProject,
    loadStartProject,
    loadStopProject,
    showGlobalSettingDlg,
    hideGlobalSettingDlg,
    loadSaveGlobalSetting
}from './action';

export const openProjectInfo = reducer;