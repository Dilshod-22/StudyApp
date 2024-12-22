const Router = require("express").Router()
const {
    findWord,
    createNewWord,
    deleteWord,
    updateWord 
} = require("../controller/wordCTRL");

Router.get("/",findWord);
Router.post("/create",createNewWord);
Router.delete("/delete/:id",deleteWord);
Router.put("/updateWord/:id",updateWord);


module.exports = Router;
