import reducer from './reducer';

export {
    loadOpenProject,
    startOpenProject,
    hideOpenProjectDlg,
    loadSaveOpenProject,
    loadRemoveOpenProject
}from './action';

export const openProjectInfo = reducer;