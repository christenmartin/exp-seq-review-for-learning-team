const router = require('express').Router();
const {Student} = require('../db/models');

router.get('/', (req, res, next) => {
  Student.findAll({})
  .then(students => res.json(students))
  .catch(next);
})

router.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(newStudent => res.json(newStudent))
  .catch(next);
})

router.param('studentId', (req, res, next, studentId) => {
  let thisStudentId = +studentId;
  Student.findById(thisStudentId)
  .then(studentInstance => {
    if (studentInstance) {
      req.student = studentInstance;
      next();
    }
    else {(res.sendStatus(404))}
  })
})

router.get('/:studentId', (req, res, next) => {
  res.json(req.student);
})

router.put('/:studentId', (req, res, next) => {
  req.student.update(req.body)
  .then(updatedStudent => res.json(updatedStudent))
  .catch(next);
})

router.delete('/:studentId', (req, res, next) => {
  req.student.destroy()
  .then(() => res.send('destroyed student instance'))
  .catch(next);
})

module.exports = router;
