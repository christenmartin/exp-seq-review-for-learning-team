'use strict'
const apiRouter = require('express').Router();
const db = require('../db/models')
const dogRouter = require('./dog.route');
const ownerRouter = require('./owner.route');


//here im mounting two more routers on top of this router
apiRouter.use('/dogs', dogRouter);
apiRouter.use('/owners', ownerRouter);


apiRouter.get('/hello', (req, res) => res.send({hello: 'where am i hi'}))


module.exports = apiRouter;

