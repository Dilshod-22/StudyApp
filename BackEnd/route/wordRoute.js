const Router = require("express").Router()
const {
    findWord,
    createNewWord,
    deleteWord,
    updateWord,
    getQuiz 
} = require("../controller/wordCTRL");

Router.get("/",findWord);
Router.post("/create",createNewWord);
Router.delete("/delete/:id",deleteWord);
Router.put("/updateWord/:id",updateWord);
Router.post("/getQuiz",getQuiz);


module.exports = Router;
