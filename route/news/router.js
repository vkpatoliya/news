const express = require('express');
const route = express.Router();


/////////////////////////////////////////////
/////////      views        /////////////////
////////////////////////////////////////////
route.get('/', (req, res) => {
    // console.log(req.body)
    res.render('news')
});
route.get('/aboutus', (req, res) => {
    console.log(req.body);
    res.render('aboutus');
});

route.get('/contactus', (req, res) => {

    res.render('contactus1');
});
route.get('/feedback', (req, res) => {

    res.render('feedback1');
});





////////////////////////////////////////////
/////////      Request        /////////////
////////////////////////////////////////////

route.post('/feedback', (req, res) => {
    console.log(req.body)
    res.render('feedback')
});


route.post('/contactus1', (req, res) => {
    console.log(req.body);
    res.render('contactus1');
});


module.exports = route;