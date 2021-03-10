const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'flps_user',
    password: 'asdf',
    database: 'flps',
    multipleStatements: true
};

// Create a MySQL pool
// const pool = mysql.createPool(config);
const pool = mysql.createConnection(config);

// Export the pool
module.exports = pool;