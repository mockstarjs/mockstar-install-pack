import reducer from './reducer';

export {
    loadOpenProject,
    startOpenProject,
    hideOpenProjectDlg,
    loadSaveOpenProject,
    loadRemoveOpenProject,
    loadStartProject,
    loadStopProject
}from './action';

export const openProjectInfo = reducer;