require("dotenv").config();

let uri =
  "mongodb+srv://lobo012487:LqfIGmK3XAhWekRR@cluster0.2lykexm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let mongoose = require("mongoose");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let peopleSchema = new mongoose.Schema({
  name: { type: String, require: true },
  age: Number,
  favoriteFoods: [String],
});

let person = mongoose.model("Person", peopleSchema);

var createAndSavePerson = function (done) {
  let Carlos = new Person({
    name: "Carlos",
    age: 37,
    favoriteFoods: ["sushi"],
  });

  Carlos.save((error, data) => {
    if (error) {
      console.log(error);
    } else {
      done(null, data);
    }
  });
  //   done(null /*, data*/);
};

let arrayOfPeople = [
  {
    name: "Garry",
    age: 35,
    favoriteFoods: ["fried chicken", "chicken wings", "chicken nuggets"],
  },
  { name: "Hannah", age: 52, favoriteFoods: ["vegetable soup"] },
];

var createManyPeople = function (arrayOfPeople, done) {
  Person.create(arrayOfPeople, (error, createdPeople) => {
    if (error) {
      console.log(error);
    } else {
      done(null, createdPeople);
    }
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
