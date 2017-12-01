const router = require('express').Router();
const {Student, Campus} = require('../db/models');


router.get('/', (req, res, next) => {
  Student.findAll({})
  .then(students => res.json(students))
  .catch(next);

})

router.post('/', (req, res, next) => {
  //posting a new student - happens from the students page

  // .catch(next);

})

router.get('/:studentId', (req, res, next) => {
  Student.findById(+req.params.studentId)
  .then(student => res.json(student))
  .catch(next);

})

router.put('/:studentId', (req, res, next) => {
  // updating student info for one student
  // .catch(next);
})

router.delete('/:studentId', (req, res, next) => {
  // deleting a student - not entirely sure if this should happen on individual page i guess????
  //.catch(next);
})






module.exports = router;


//     include: [
      // {model: Campus}]
