const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('campuses', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.nasa.gov/sites/default/files/images/729223main_728322main_messenger_orbit_image20130218_2_full_full_full.jpg'
  },

  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus;
