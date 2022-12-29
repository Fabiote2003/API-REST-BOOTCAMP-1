const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp123",
    database: "primer-api"
});

module.exports = db;

