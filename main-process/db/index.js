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

// saveData({
//     info: {
//         cwd: 'a/b/c'
//     },
//     projects: [{
//         id: 1,
//         title: '摇一摇红包',
//         description: '摇一摇红包 description',
//         port: 9527,
//         basePath: '/Users/helinjiang/gitprojects/now-h5-shake-redpacket/mockstar-app'
//     }, {
//         id: 2,
//         title: 'title2',
//         description: 'description2',
//         port: 9528
//     }, {
//         id: 3,
//         title: 'title3',
//         description: 'description3',
//         port: 9529
//     }, {
//         id: 4,
//         title: 'title4',
//         description: 'description4',
//         port: 9530
//     }]
// });
//
// console.log(getData());
// console.log(getProjectById(1));