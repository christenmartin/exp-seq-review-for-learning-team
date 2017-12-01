const router = require('express').Router();
const {Student} = require('../db/models');


router.get('/', (req, res) => {
  Student.findAll()
  .then(students => res.json(students));
})


module.exports = router;

