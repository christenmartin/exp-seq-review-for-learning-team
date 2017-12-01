const Sequelize = require('sequelize');
const db = require('../index.js');

const Student = db.define('students', {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true //do we need allowNull AND notEmpty
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false, //not sure i need this AND isEmail
    notEmpty: true,
    isEmail: true
  },

  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0
    }
  },

  name: {
    type: Sequelize.VIRTUAL,
    get () {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
    }
  }

})

module.exports = Student;
