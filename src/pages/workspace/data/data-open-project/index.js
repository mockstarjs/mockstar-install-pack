import reducer from './reducer';

export {
    loadOpenProject,
    startOpenProject,
    hideOpenProjectDlg,
    loadSaveOpenProject,
    loadRemoveOpenProject,
    loadStartProject
}from './action';

export const openProjectInfo = reducer;