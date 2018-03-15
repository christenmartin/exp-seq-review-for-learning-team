const Sequelize = require('sequelize');
const db = require('../index');


const Owner = db.define('owners', {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  }
})

module.exports = Owner;
