import mysql from 'mysql2/promise'
const con = mysql.createConnection({
    host: process.env.MYSQL_HOST;
    user: process.env.MYSQL_USER;
    DATABASE: process.env.MYSQL_DB;
    password: process.env.MYSQL_PWD
    
})

console.log('DB ativado');

export{con}