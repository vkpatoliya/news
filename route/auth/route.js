const express = require('express');
const route = express.Router();
// views
route.get('/login', (req, res) => {
    console.log(req.body);
    res.render('login');

});
route.get('/registration', (req, res) => {
    res.render('registration1');
});

//  request
route.post('/registration', (req, res) => {
    console.log(req.body)
    res.render('news')
});

route.post('/login', (req, res) => {
    console.log(req.body)
    res.render('news')
});



module.exports = route;