// Conexión con MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'youplay',
    database: 'youplay',
    password: '12345',
    multipleStatements: true
});

module.exports = { connection };