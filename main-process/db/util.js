const path = require('path');
const osenv = require('osenv');

const yaml = require('./yaml');

/**
 * 获得 .idea.yml 的文件路径
 *
 * @return {String}
 */
function getDataYmlPath() {
    return path.join(osenv.home(), './.mockstar', '.idea.yml');
}

/**
 * 保存信息
 *
 * @param {Object} data
 */
function saveData(data) {
    yaml.safeDump(data, getDataYmlPath());
}

/**
 * 获取信息
 *
 * @return {Object}
 */
function getData() {
    return yaml.parseYaml(getDataYmlPath()) || {};
}

module.exports = {
    getDataYmlPath,
    saveData,
    getData
};

//
// saveData([{
//     id: 1,
//     title: '摇一摇红包',
//     description: '摇一摇红包 description',
//     port: 9527,
//     basePath: '/Users/helinjiang/gitprojects/now-h5-shake-redpacket/mockstar-app'
// }, {
//     id: 2,
//     title: 'title2',
//     description: 'description2',
//     port: 9528
// }, {
//     id: 3,
//     title: 'title3',
//     description: 'description3',
//     port: 9529
// }, {
//     id: 4,
//     title: 'title4',
//     description: 'description4',
//     port: 9530
// }]);
//
// console.log(getData());