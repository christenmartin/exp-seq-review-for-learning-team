// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

// var Promise = require("bluebird");
const {
  db,
  Student,
  Campus
} = require('./models');

const students = [
    {
      firstName: "Hannah",
      lastName: "Weber",
      campusId: 1,
      email: 'hannah@hannah.com',
      gpa: 2.0
    },
    {
      firstName: "Noah",
      lastName: "Stitelman",
      campusId: 2,
      email: 'noah@mac.com',
      gpa: 3.5
    },
    {
      firstName: "Little Debbie",
      lastName: "Weber",
      campusId: 1,
      email: 'littledebdeb@hannah.com',
      gpa: 4.0
    },
    {
      firstName: "Grace",
      lastName: "Jones",
      campusId: 2,
      email: 'grace@queen.com',
      gpa: 3.9
    },
    {
      firstName: "Princess",
      lastName: "Diana",
      campusId: 3,
      email: 'princess@diana.com',
      gpa: 2.0
    },
    {
      firstName: "Patrick",
      lastName: "Stewart",
      campusId: 4,
      email: 'patrick@hannah.com',
      gpa: 1.7
    },
    {
      firstName: "Jeff",
      lastName: "Goldblum",
      campusId: 4,
      email: 'jeff@coolguy.com',
      gpa: 3.7
    },
    {
      firstName: "Harrison",
      lastName: "Ford",
      campusId: 5,
      email: 'harrison@coolguy.com',
      gpa: 4.0
    },
    {
      firstName: "Daryl",
      lastName: "Hannah",
      campusId: 6,
      email: 'd@coolgal.com',
      gpa: 3.4
    },
    {
      firstName: "Gina",
      lastName: "Davis",
      campusId: 6,
      email: 'gina@thelmaandlouise.com',
      gpa: 4.0
    },
    {
      firstName: "Susan",
      lastName: "Sarandon",
      campusId: 3,
      email: 'susan@thelmaandlouise.com',
      gpa: 1.0
    }

    ]

const campuses = [
  {
        name: 'Neptune',
        description: 'the blue planet (i think).'
      },
  {
        name: 'Aquarii b',
        description: 'Outside our solar system. It has a lot of suns?'
      },
  {
        name: 'Venus',
        description: 'Because obviously'
      },
  {
        name: 'Jupiter',
        description: 'idk about jupiter its big tho'
      },
   {
        name: 'Mars',
        description: 'jeff goes here'
      },
    {
        name: '55 Cancri',
        description: 'An extrasolar planet approximately 41 light years away from Earth in the constellation of Cancer.'
      }
]

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
);


const main = () => {
  console.log('syncing db');
  db.sync({force: true})
  .then(() => {
    console.log('seeding')
    return seed()
  })
  .catch(err => {
    console.log('Error while seeding')
    console.log(err.stack)
  })
  .then(()=> {
    db.close();
    return null;
  })
}

main();



// db
//   .sync({ force: true })
//   .then(function() {
//     console.log("Dropped old data, now inserting data");
//     return Promise.map(Object.keys(data), function(name) {
//       return Promise.map(data[name], function(item) {
//         console.log('!!!!!!!!!!',name)
//         return db.model(name).create(item, {
//           include: [Campus]
//         });
//       });
//     });
//   })
//   .then(function() {
//     console.log("Finished inserting data");
//   })
//   .catch(function(err) {
//     console.error("There was totally a problem", err, err.stack);
//   })
//   .finally(function() {
//     db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
//     console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
//     return null; // silences bluebird warning about using non-returned promises inside of handlers.
//   });
