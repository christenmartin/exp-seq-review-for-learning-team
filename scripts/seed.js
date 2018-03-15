const {
  db,
  Dog,
  Owner
} = require('../server/db/models');

const dogs = [
    {
      name: "Bonnie",
      age: 2,
      ownerId: 3
    },
    {
      name: "Funyuns",
      breed: 'pug',
      dogYearsAge: 70,
      ownerId: 1
    },
    {
      name: "George",
      breed: 'pit bull',
      age: 5,
      ownerId: 2
    },
    {
      name: "Morty",
      breed: 'lab',
      age: 1,
      ownerId: 2
    }
]

const owners = [
  {
      firstName: "Hannah",
      lastName: "Weber"
    },
    {
      firstName: "Meryl",
      lastName: "Streep"
    },
    {
      firstName: "Grace",
      lastName: "Hopper"
    }
]

const seed = () =>

  Promise.all(owners.map(owner =>
    Owner.create(owner))
  )
  .then(() =>
  Promise.all(dogs.map(dog =>
    Dog.create(dog))
  )
);


const bigSeedTime = () => {
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

bigSeedTime();
