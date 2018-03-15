const db = require("../index");
const Sequelize = require("sequelize");

const Dog = db.define("dogs", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  breed: {
    type: Sequelize.STRING,
    defaultValue: "mutt"
  },

  age: {
    type: Sequelize.INTEGER
  },

  //this is a virtual with a getter and setter method
  dogYearsAge: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue("age") * 7;
    },
    set(dogYearsAge) {
      return this.setDataValue("age", dogYearsAge / 7);
    }
  }
});

//class method
Dog.findThisBreed = function(breedToSearchFor) {
  //this context is the Dog model
  return this.findAll({ where: { breed: breedToSearchFor } });
};

//instance method
Dog.prototype.sayHello = function () {
  //this context is the specific instance (or row)
  return `saying hello to ${this.name}!!!!!!!!!`;
}

module.exports = Dog;
