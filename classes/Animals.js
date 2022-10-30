const animals = require("../simple-datasets/animals");
const bigAnimalArray = require("../array-objects/animals");

class Animals {
  constructor() {
    this.simple = animals;
    this.arrayOfObjects = bigAnimalArray;
  }

  // FOR this.simple database
  anilizeWords() {}

  organizeByLetterNumber() {}

  turnToUppercase() {}

  organizeByFirstLetter() {}

  // FOR this.arrayOfObjects database
  getAnimalInZoo() {}

  findFoodByName() {}

  organizeByZoo() {}

  getAverageAge() {}

  getMessages() {}

  findWhoLovesThis() {}

  organizeByType() {}
}

module.exports = Animals;
