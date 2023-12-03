const mysql = require('mysql');
const mysql_config = require('./databaseConfig.json');

const $ = mysql.createConnection({
    host: mysql_config.host,
    user: mysql_config.user,
    password: mysql_config.password
});

module.exports = $;
