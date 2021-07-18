const mysql = require('mysql')
const config = require('./dbConfig')
const connection = mysql.createConnection(config.Home)
module.exports = connection