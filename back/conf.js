const mysql = require('mysql');

const connection = mysql.createConnection({
    host : '',
    user: '',
    password: '',
    database:'',
});

connection.connect(function(err) {
    if (!err) {
        console.log('Successfully connected to database');
    } else {
        console.log('Error connexting to database', err);
    }
});

module.exports = connection;