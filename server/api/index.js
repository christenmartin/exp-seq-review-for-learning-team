'use strict'
const apiRouter = require('express').Router();
const db = require('../db/models')
const studentRouter = require('./student.route');
// const campusRouter = require('./campus.route');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))



// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create


module.exports = apiRouter;

// GET
// - all campuses
// - a campus by id
// - all students
// - a student by id
// POST
// - new campus
// - new student
// PUT
// - updated student info for one student
// - updated campus info for one campus
// DELETE
// - a campus
// - a student
