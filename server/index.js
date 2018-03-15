'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//this is where i'm telling my app to use the router in ./api for any URI that starts with '/api'
app.use('/api', require('./api'));


//static middleware -- i dont actually use this in this code since i dont even have a public directory here, but i left it here as an example
app.use(express.static(path.join(__dirname, '../public')));



//error handling middleware --- whenever i say .catch(next) in my routes, i'm saying that if my asynchronous database queries error out, i want to catch that error and move on. this app.use is what finally deals with any of those errors when they come up
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
