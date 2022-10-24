const configenv = require('dotenv').config();
const {Client} = require('pg');
 
const pgdb = new Client({
    host:process.env.SERVER_HOST,
    user:process.env.DATABASE_USER, 
    port:process.env.DATABASE_PORT,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME,
});


pgdb.connect();
module.exports = pgdb;
// client.connect();

// client.query('Select * from fruits', (err, res)=>{
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err.message);
//     }
//     client.end;
// });