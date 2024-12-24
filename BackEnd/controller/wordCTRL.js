const expressAsyncHandler = require("express-async-handler");
const ExpressAsyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require('uuid');

const { Pool } = require('pg');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'mydatabase',
    password:'0422',
    port:'5432',
});



const findWord = ExpressAsyncHandler(async(req,res)=>{
    const formattedDate = new Date(new Date().getTime() + (5 * 60 * 60 * 1000))
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');   
    console.log(req.headers.newword);
    res.send(formattedDate);
})
 
const createNewWord = ExpressAsyncHandler(async(req,res)=>{
    const { newWord , wordTranslation , category , location } = req.body;
    const formattedDate = new Date(new Date().getTime() + (5 * 60 * 60 * 1000))
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
    try{
        myID = uuidv4();
        const text = 'INSERT INTO baseWord(id, word, translation, category, location) VALUES($1, $2, $3, $4, $5)';
        const values = [myID, newWord, wordTranslation, category, location];
        
        const result = await pool.query(text, values);
        res.send(result).status(200);
    }catch(err){
        res.send(err).status(200);
    }
})


const deleteWord = expressAsyncHandler(async(req,res)=>{
    const {id} = req.params;
    try{
        const newQuery = `DELETE FROM baseWord WHERE id = ${id}`;
        const result = await pool.query(newQuery);
        res.send(result).status(200);
    }catch(err){
        console.log(err);    
    }
})


const updateWord = expressAsyncHandler(async(req,res)=>{
    const {id} = req.params;
    try{    
        console.log(id);
        
        const newQery = `UPDATE baseWord SET translation='${req.body.translation}',word='${req.body.word}' WHERE id = '${id}'`;
        const queryResult = await pool.query(newQery);
        res.send("success").status(200);
    }catch(err){
        console.log(err);
    }
})


const getQuiz = expressAsyncHandler(async(req,res)=>{
    const { limit , units} = req.body;
    try{
        const newQuery = `Selec`;
    }catch(err){
        console.log(err);
    }
})

module.exports = {
    findWord,
    createNewWord,
    deleteWord,
    updateWord,
    getQuiz
}