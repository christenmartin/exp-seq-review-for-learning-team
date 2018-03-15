'use strict';

//i require in my db, my dog model and my owner model so that i can make associations in this one file and then export everything all together
const db = require('../index');
const Dog = require('./dog.model');
const Owner = require('./owner.model');

Dog.belongsTo(Owner); //adds an ownerId column to the Dog model and also gives us a few handy methods - read about it in the tom docs
Owner.hasMany(Dog); //this doesnt add any columns to the owner model, it just gives us more built in methods. read more about this in the tom docs :)

module.exports = {db, Dog, Owner};

