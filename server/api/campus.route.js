const router = require('express').Router();
const {Student, Campus} = require('../db/models');

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
})

router.post('/', (req, res, next) => {
  // post new campus
  // .catch(next);
})


router.get('/:campusId', (req, res, next) => {
  Campus.findById(+req.params.campusId)
  .then(campus => res.json(campus))
  .catch(next);
})

router.put('/:campusId', (req, res, next) => {
  // update campus info for one campus
  // .catch(next);
})

router.delete('/:campusId', (req, res, next) => {
  // delete a campus
  // .catch(next);
})

module.exports = router;
