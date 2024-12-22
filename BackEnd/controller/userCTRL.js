const expressAsyncHandler = require('express-async-handler');

const { Pool } = require('pg');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'simpleAuth',
    password:'0102',
    port:'5432',
});

const userRegistration = expressAsyncHandler(async(req,res)=>{
    const { username, email, password } = req.body; 
    try {
        let values = [username, email, password];
        const newQuery = 'INSERT INTO simpleauth(username, email, password) VALUES($1, $2, $3)';
        const result = await pool.query(newQuery, values);
        res.send("SUCCESS").status(200);    
    }catch(err) {
        res.send(err);
    }
})

const takeAllUser = expressAsyncHandler(async(req,res)=>{
    try {
        const allUsers = await pool.query('SELECT * FROM simpleauth');
        res.send(allUsers.rows).status(200);
    } catch(err) {
        res.send(err).status(404);
    }
});

const removeUser = expressAsyncHandler(async(req,res)=>{
    console.log("keldi");
    
    try {
        const { id } = req.params;
        const removeQuery = 'DELETE FROM simpleauth WHERE id=$1';
        const result = await pool.query(removeQuery, [id]);     
        res.send("User removed").status(200);
    } catch(err) {
        res.send(err);
    }
});

module.exports = {
    userRegistration,
    takeAllUser,
    removeUser
}