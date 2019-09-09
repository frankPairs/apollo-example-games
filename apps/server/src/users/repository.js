const uuidv4 = require('uuid/v4');

const { repository } = require('../common');

const users = [];

module.exports = repository(users);
