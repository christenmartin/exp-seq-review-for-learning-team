// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require("bluebird");
var {
  db,
  Student,
  Campus

} = require('./models');

var data = {
  students: [
    {
      firstName: "Hannah",
      lastName: "Weber",
      campus: {
        name: 'Neptune',
        description: 'the blue planet (i think).'
      },
      email: 'hannah@hannah.com',
      gpa: 2.0
    },
    {
      firstName: "Noah",
      lastName: "Stitelman",
      campus: {
        name: 'Aquarii b',
        description: 'Outside our solar system. It has a lot of suns?'
      },
      email: 'noah@mac.com',
      gpa: 3.5
    },
    {
      firstName: "Little Debbie",
      lastName: "Weber",
      campus: {
        name: 'Neptune',
        description: 'the blue planet (i think).'
      },
      email: 'littledebdeb@hannah.com',
      gpa: 4.0
    },
    {
      firstName: "Grace",
      lastName: "Jones",
      campus: {
        name: 'Venus',
        description: 'Because obviously'
      },
      email: 'grace@queen.com',
      gpa: 3.9
    },
    {
      firstName: "Princess",
      lastName: "Diana",
      campus: {
        name: 'Venus',
        description: 'Because obviously'
      },
      email: 'princess@diana.com',
      gpa: 2.0
    },
    {
      firstName: "Patrick",
      lastName: "Stewart",
      campus: {
        name: 'Jupiter',
        description: 'idk about jupiter its big tho'
      },
      email: 'patrick@hannah.com',
      gpa: 1.7
    },
    {
      firstName: "Jeff",
      lastName: "Goldblum",
      campus: {
        name: 'Mars',
        description: 'jeff goes here'
      },
      email: 'jeff@coolguy.com',
      gpa: 3.7
    }
    ]
};

db
  .sync({ force: true })
  .then(function() {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        console.log('!!!!!!!!!!',name)
        return db.model(name).create(item, {
          include: [Campus]
        });
      });
    });
  })
  .then(function() {
    console.log("Finished inserting data");
  })
  .catch(function(err) {
    console.error("There was totally a problem", err, err.stack);
  })
  .finally(function() {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
