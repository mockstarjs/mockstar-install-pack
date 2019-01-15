const { saveData, getData } = require('./util');

/**
 * 通过 id 获取指定的 project
 *
 * @param {Number | String} id 项目ID
 * @return {*|null}
 */
function getProjectById(id) {
    const requestId = parseInt(id, 10);
    const projects = getData().projects || [];

    return projects.filter((item) => {
        return item.id === requestId;
    })[0] || null;
}

/**
 * 保存项目
 *
 * @param {Object} data
 */
function saveProject(data = {}) {
    const cacheData = getData();
    const projects = cacheData.projects || [];

    // 如果该项目没有记录，则追加记录
    if (!projects.filter((item) => {
        return item.id === data.id;
    }).length) {
        data.id = (projects[projects.length - 1] || { id: 0 }).id + 1;
        projects.push(data);
    }

    // 更新项目列表
    cacheData.projects = projects;

    // 保存
    saveData(cacheData);
}

module.exports = {
    getProjectById,
    saveProject,
    saveData,
    getData
};

// const path = require('path')
// saveData(require(path.join(__dirname,'../../src/business/mock/database')));
// //
// console.log(getData());
// console.log(getProjectById(1));