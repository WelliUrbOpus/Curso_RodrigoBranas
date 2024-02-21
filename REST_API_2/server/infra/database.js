const pgp = require('pg-promise')();

const db = pgp({
    user: 'postgres',
    password: 'Opus$$10',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports = db;