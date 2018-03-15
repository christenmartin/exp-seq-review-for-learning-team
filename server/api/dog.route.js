const router = require('express').Router();
const {Dog, Owner} = require('../db/models');

//!!!!!!!!! Remember that every route in here is prepended with localhost:3000/api/dogs

router.get("/", (req, res, next) => {
  if (!req.query.breed) {
    Dog.findAll()
      .then(dogs => res.json(dogs))
      .catch(next);
  } else {
    //test this query out by adding ?breed=pug to the end of your URI
    Dog.findThisBreed(req.query.breed)
      .then(foundDogs => res.json(foundDogs))
      .catch(next);
  }
});

router.post('/', (req, res, next) => {
  Dog.create(req.body)
  .then((newDog) => res.json(newDog))
  .catch(next)
})

router.get('/single-dog/say-hello/:dogId', (req, res, next) => {
  Dog.findById(+req.params.dogId)
  .then(foundDog => foundDog.sayHello())
  .then(greeting => res.json(greeting))
  .catch(next)
})

router.get('/single-dog/:dogId', (req, res, next) => {
  Dog.findById(+req.params.dogId)
  .then((foundDog) => res.json(foundDog))
  .catch(next)
})

router.put('/single-dog/:dogId', (req, res, next) => {
  Dog.update(req.body, {where: {id: +req.params.dogId}, returning: true})
  .then(([didIUpdate, updatedDog]) => res.json(updatedDog))
  .catch(next)
})

router.delete('/single-dog/:dogId', (req, res, next) => {
  Dog.destroy({where: {id: +req.params.dogId}})
  .then(() => res.json('destroyed a dog bc im a monster'))
  .catch(next)
})

module.exports = router;
