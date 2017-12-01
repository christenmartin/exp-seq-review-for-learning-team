'use strict'
const apiRouter = require('express').Router();
const db = require('../db/models')
const studentRouter = require('./student.route');
const campusRouter = require('./campus.route');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

apiRouter.use('/students', studentRouter);
apiRouter.use('/campuses', campusRouter);


apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))


module.exports = apiRouter;

