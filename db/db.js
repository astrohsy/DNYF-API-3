const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "DB_LOCATION", 
    port: 3306, 
    user: "root", 
    password: "{DB_PASSWORD}", 
    database: "{DB_NAME}"
});

module.exports = pool;