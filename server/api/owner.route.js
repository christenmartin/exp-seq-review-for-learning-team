const router = require('express').Router();
const {Dog, Owner} = require('../db/models');


//!!!!!!!!! Remember that every route in here is prepended with localhost:3000/api/owners

router.get('/', (req, res, next) => {
  Owner.findAll({
  	//this is called 'eager loading' -- it's the equivalent of joining two tables in SQL (in fact, that's what it's doing under the hood). Don't worry about this too much right now - it's just a fun thing you'll use in the future
    include: [
    {model: Dog}]
  })
  //if you want this without the eager loading above, comment out the above and use this instead:
  // Owner.findAll()
  .then(owners => res.json(owners))
  .catch(next);
})

router.get('/:ownerId', (req, res, next) => {
	Owner.findById(+req.params.ownerId)
	.then(foundOwner => res.json(foundOwner))
	.catch(next);
})

module.exports = router;
