const route = require('express').Router();
const { 
    userRegistration,
    takeAllUser,
    removeUser } = require('../controller/userCTRL');

route.post('/registration',userRegistration);
route.get('/getAllUser',takeAllUser);
route.delete('/deleteUser/:id',removeUser);

module.exports = route;