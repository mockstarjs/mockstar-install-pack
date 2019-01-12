const { projects } = require('./database');

module.exports = (id) => {
    const requestId = parseInt(id, 10);

    return projects.filter((item) => {
        return item.id === requestId;
    })[0] || null;
};