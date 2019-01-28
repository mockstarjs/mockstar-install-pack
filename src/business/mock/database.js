const projects = [{
    id: 1,
    name: '摇一摇红包',
    description: '摇一摇红包 description',
    port: 9527,
    basePath: '/Users/helinjiang/gitprojects/now-h5-shake-redpacket/mockstar-app'
}, {
    id: 2,
    name: 'name2',
    description: 'description2',
    port: 9528,
    basePath: '/Users/name2/mockstar-app'
}, {
    id: 3,
    name: 'name3',
    description: 'description3',
    port: 9529,
    basePath: '/Users/name3/mockstar-app'
}, {
    id: 4,
    name: 'name4',
    description: 'description4',
    port: 9530,
    basePath: '/Users/name4/mockstar-app'
}];

const globalSetting = {
    // 数据库文件的当前路径
    cwd: '/a/b/c',
    cmder: 'tnpm'
};

module.exports = {
    globalSetting,
    projects
};