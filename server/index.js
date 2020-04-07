// import express
const express = require('express');
const routes = require('./routes/index-routes');


//config express
const app = express();


//load routes
app.use('/', routes());

app.listen(4000);