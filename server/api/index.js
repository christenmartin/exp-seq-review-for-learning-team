'use strict'
const apiRouter = require('express').Router();
const db = require('../db/models')
const studentRouter = require('./student.route');
const campusRouter = require('./campus.route');

apiRouter.use('/students', studentRouter);
apiRouter.use('/campuses', campusRouter);


apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))


module.exports = apiRouter;

