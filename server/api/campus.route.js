const router = require('express').Router();
const {Campus} = require('../db/models');

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
})

router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(newCampus => res.json(newCampus))
  .catch(next);
})

router.param('campusId', (req, res, next, campusId) => {
  let thisCampusId = +campusId;
  Campus.findById(thisCampusId)
  .then(campusInstance => {
    if (campusInstance) {
      req.campus = campusInstance;
      next();
    }
    else {res.sendStatus(404)}
  })
})

router.get('/:campusId', (req, res, next) => {
  res.json(req.campus);
})

router.put('/:campusId', (req, res, next) => {
  req.campus.update(req.body)
  .then(updatedCampus => res.json(updatedCampus))
  .catch(next);
})

router.delete('/:campusId', (req, res, next) => {
  req.campus.destroy()
  .then(() => res.send('destroyed campus instance'))
  .catch(next);
})

module.exports = router;
