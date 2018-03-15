'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');
const models = require('./models');

console.log(chalk.yellow("Opening database connection"));


//creating a database by passing in my database location to the Sequelize constructor
//dog-time, the last part of this location, is the NAME of the database on my local machine
const db = new Sequelize("postgres://localhost:5432/dog-time", {
  logging: false
});

module.exports = db;

