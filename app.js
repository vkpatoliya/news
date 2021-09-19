const express = require('express');
const ejs = require('ejs');
const path = require("path");

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use('/', require('./route/index'));


app.use(express.static('./public'));
app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, './public/page'));



app.listen(3002, () => {
    console.log("server start");
});