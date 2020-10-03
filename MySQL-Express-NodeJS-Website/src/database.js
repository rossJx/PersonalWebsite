const mysql = require('mysql');

const { database } = require('./keys');
const { promisify} = require('util'); //Allows to promisify the queries to the DB
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.errOr('DATABASE HAS TOO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABSE CONNECTION WAS REFUSED');
        }
    }
    if(connection) connection.release();
    console.log('DB is connected');
    return;
});

//Promisify Pool Queries
pool.query = promisify(pool.query);

module.exports = pool;