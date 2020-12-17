const mysql = require('mysql');

require('dotenv').config(process.cwd(), '.env') // REQUIRE 'dotenv" with this line

const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
});

connection.connect(function(err) {
    if (!err) {
        console.log('Successfully connected to database');
    } else {
        console.log('Error connecting to database', err);
    }
});

module.exports = connection;