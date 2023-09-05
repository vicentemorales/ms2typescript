const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: 'puravida',
    host: 'localhost',
    port:  5432,
    database: 'dad'
});

module.exports = pool;