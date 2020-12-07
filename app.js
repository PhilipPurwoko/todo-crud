require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');

const todoRoute = require('./routes');
const errorRoute = require('./controller/404');

app.use(todoRoute);
app.use(errorRoute.get404);

// Start server
const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`App started on http://localhost:${port}`)
});