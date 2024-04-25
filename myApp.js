require("dotenv").config();
//nconst Database = require("@replit/database");
const dotenv = require("dotenv");
dotenv.config({ path: "sample.env" });

let mongoose = require("mongoose");
let person;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let peopleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model("Person", peopleSchema);

var createAndSavePerson = function (done) {
  let Carlos = new Person({
    name: "Carlos",
    age: 37,
    favoriteFoods: ["eggs"],
  });
  Carlos.save((error, data) => {
    if (error) {
      console.log(error);
    } else {
      done(null, data);
    }
  });
};
let arrayOfPeople = [
  {
    name: "Eduardo",
    age: 30,
    favoriFoods: ["fish", "fresh fruit", "chicken"],
  },
  { name: "Hannah", age: 52, favoriteFoods: ["vegetable soup"] },
  { name: "Igor", age: 50, favoriteFoodks: ["rice"] },
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

Person.find({ name: "Eduardo" }, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
var findPeopleByName = function (personName, done) {
  Person.find({ name: personName }, (error, arrayOfResults) => {
    if (error) {
      console.log(error);
    } else {
      done(null, arrayOfResults);
    }
  });
};
var findOneByFood = function (food, done) {
  Person.findOne({ favoriteFoods: { $all: [food] } }, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      done(null, result);
    }
  });
};

var findPersonById = function (personId, done) {
  Person.findById(personId, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      done(null, data);
    }
  });
};

var findEditThenSave = function (personId, done) {
  var foodToAdd = "hamburger";
  Person.findById(personId, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      result.favoriteFoods.push(foodToAdd);
      result.save((error, updatedResult) => {
        if (error) {
          console.log(error);
        } else {
          done(null, updatedResult);
        }
      });
    }
  });
};

var findAndUpdate = function (personName, done) {
  var ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (error, updatedRecord) => {
      if (error) {
        console.log(error);
      } else {
        done(null, updatedRecord);
      }
    },
  );
};

var removeById = function (personId, done) {
  Person.findByIdAndRemove(personId, (error, deletedRecord) => {
    if (error) {
    } else {
      done(null, deletedRecord);
    }
  });
};

var removeManyPeople = function (done) {
  var nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (error, JSONStatus) => {
    if (error) {
      console.log(error);
    } else {
      done(null, JSONStatus);
    }
  });
};
var queryChain = function (done) {
  var foodToSearch = "burrito";
  Person.find({ favoriteFoods: { $all: [foodToSearch] } })
    .sort({ name: "asc" })
    .limit(2)
    .select("-age")
    .exec((error, filteredResults) => {
      if (error) {
        console.log(error);
      } else {
        done(null, filteredResults);
      }
    });
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

