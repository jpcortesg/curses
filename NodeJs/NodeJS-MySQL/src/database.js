const mysql = require('mysql') // Module mysql
const { promisify } =  require('util') // To support promises

const { database } = require('./keys') // Import keys for DB

const pool = mysql.createPool(database); // To connect to the DATABASE, generates connection

pool.getConnection((err, connection) => { // Utilice connection
  if(err){
    if(err.code == 'PROTOCOL_CONNECTION_LOST'){
      console.log('DATABASE CONNECTION WAS CLOSED');
    }
    if(err.code == 'ER_CON_COUNT_ERROR'){
      console.log('DATABASE HAS TO MANY CONNECTION');
    }
    if(err.code == 'ECONNREFUSED'){
      console.log('DATABASE CONNECTION WAS REFUSED');
    }
  }
  if(connection) connection.release();
  console.log('DB is Connected');
  return;
})

pool.query = promisify(pool.query) // Only the query have support for promises

module.exports = pool