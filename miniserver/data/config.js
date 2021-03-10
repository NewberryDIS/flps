const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'flps_user',
    password: 'asdf',
    database: 'flps',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;