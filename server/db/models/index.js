'use strict';

  const db = require('../index');
  const Student = require('./student.model');
  const Campus = require('./campus.model');

  Student.belongsTo(Campus);
  Campus.hasMany(Student);

  module.exports = {db, Student, Campus};

