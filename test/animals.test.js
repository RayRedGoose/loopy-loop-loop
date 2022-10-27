const { expect } = require("chai");
const Animals = require("../classes/Animals");

describe("Animals", () => {
  let animalDatasetRepo, dataset;

  beforeEach(() => {
    animalDatasetRepo = new Animals();
  });

  describe("simple datasets", () => {
    beforeEach(() => {
      dataset = animalDatasetRepo.simple;
    });

    it("should return a number of animal names with given letter number", () => {
      // Write anilizeWords function returning a number of names
      // that contains given letter number
      // if given 3 it should return all words with 3 letters

      const for3letters = animalDatasetRepo.anilizeWords(3);
      expect(for3letters).to.equal(2);

      const for5letters = animalDatasetRepo.anilizeWords(5);
      expect(for5letters).to.equal(5);
    });

    it("should return an object with animal names organized by letter number", () => {
      // Write organizeByLetterNumber function returning an object
      // with letter numbers as a property name (key)
      // and an array of animals names as a property value
      // {3: ["Ape", "Cat"], 4: ["Frog", "Wolf"], ...}

      const result = animalDatasetRepo.organizeByLetterNumber();
      expect(result).to.deep.equal({
        3: ["Ape", "Cat"],
        4: ["Frog", "Wolf"],
        5: ["Bison", "Moose", "Shark", "Sheep", "Zebra"],
        6: ["Alpaca", "Monkey"],
        8: ["Elephant"],
      });
    });

    it("should return an array with uppercased animal names for given first letter", () => {
      // Write turnToUppercase function returning an array
      // with names in upper case for given first letter
      // if given 'A' it should return all words starting from A and turn into uppercase
      // ["ALPACA", "APE"]

      const resultForA = animalDatasetRepo.turnToUppercase("A");
      expect(resultForA).to.deep.equal(["ALPACA", "APE"]);

      const resultForM = animalDatasetRepo.turnToUppercase("M");
      expect(resultForM).to.deep.equal(["MONKEY", "MOOSE"]);
    });

    it("should return an object with animal names organized by first letter", () => {
      // Write organizeByFirstLetter function returning an object
      // with first letters as a property name (key)
      // and an array of animals names as a property value
      // {a: ["Alpaca", "Ape"], b: ["Bison"], ...}

      const result = animalDatasetRepo.organizeByFirstLetter();
      expect(result).to.deep.equal({
        a: ["Alpaca", "Ape"],
        b: ["Bison"],
        c: ["Cat"],
        e: ["Elephant"],
        f: ["Frog"],
        m: ["Monkey", "Moose"],
        s: ["Shark", "Sheep"],
        w: ["Wolf"],
        z: ["Zebra"],
      });
    });
  });
});