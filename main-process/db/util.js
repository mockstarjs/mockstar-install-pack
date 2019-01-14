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
    saveData,
    getData
};
