const { expect } = require("chai");
const Animals = require("../classes/Animals");

describe("Animals", () => {
  let animalDatasetRepo, dataset;

  beforeEach(() => {
    animalDatasetRepo = new Animals();
  });

  describe.skip("simple datasets", () => {
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

  describe("array of objects database", () => {
    it("should return an array with with all animals in given zoo", () => {
      // Write getAnimalInZoo function returning an array
      // with all animal names in given zoo
      // if given Denver Zoo it should return
      // ["Coco", "Pinguini", "BonBon"]

      const resultDenver = animalDatasetRepo.getAnimalInZoo("Denver Zoo");
      expect(resultDenver).to.deep.equal(["Coco", "Pinguini", "BonBon"]);

      const resultMiami = animalDatasetRepo.getAnimalInZoo("Miami Zoo");
      expect(resultMiami).to.deep.equal(["Judie", "Lorie"]);
    });

    it("should return favorite foods by an animal name ", () => {
      // Write findFoodByName function returning an array with favorite food of given animal
      // if given Coco it should return ["banana", "potato", "bamboo shoots"]

      const resultCoco = animalDatasetRepo.findFoodByName("Coco");
      expect(resultCoco).to.deep.equal(["banana", "potato", "bamboo shoots"]);

      const resultKara = animalDatasetRepo.findFoodByName("Kara");
      expect(resultKara).to.deep.equal(["rabbit", "sheep"]);
    });

    it("should organize animals by zoo", () => {
      // Write organizeByZoo function returning an organized object
      // with zoo names as property name and animals in array as value
      // {..., "Orlando Zoo": ["bear Chuck"]}

      const result = animalDatasetRepo.organizeByZoo();
      expect(result).to.deep.equal({
        "Denver Zoo": ["gorilla Coco", "penguin Pinguini", "penguin BonBon"],
        "San Diego Zoo": ["lion Zen", "lion Kara"],
        "Miami Zoo": ["gorilla Judie", "bear Lorie"],
        "Orlando Zoo": ["bear Chuck"],
      });
    });

    it("should calculate average age of animals in given zoo", () => {
      // Write getAverageAge function returning an average age
      // If given "Denver Zoo" it should return 9.7,
      // because there is three animal with ages: 7, 1 and 5
      // So average age is 4.3333... and it should be rounded

      const resultDenver = animalDatasetRepo.getAverageAge("Denver Zoo");
      expect(resultDenver).to.equal(4);

      const resultOrlando = animalDatasetRepo.getAverageAge("Orlando Zoo");
      expect(resultOrlando).to.equal(4);
    });

    it("should return messages about animals", () => {
      // Write getMessages function returning an array
      // with messages about animals of given type
      // if given bear it should return the next array
      // ["Lorie, a 10 years old bear, lives in Forest Point of Miami Zoo in Miami, FL. Lorie loves to spend all day eating cabbage, salmon and sleeping",
      // "Chuck, a 4 years old bear, lives in Bear Pole of Orlando Zoo in Orlando, FL. Chuck loves to spend all day eating carrot, beef and sleeping"]

      const resultBear = animalDatasetRepo.getMessages("bear");
      expect(resultBear).to.deep.equal([
        "Lorie, a 10 years old bear, lives in the Forest Point of Miami Zoo in Miami, FL. Lorie loves to spend all day eating cabbage, salmon and sleeping",
        "Chuck, a 4 years old bear, lives in the Bear Pole of Orlando Zoo in Orlando, FL. Chuck loves to spend all day eating carrot, beef and sleeping",
      ]);

      const resultLion = animalDatasetRepo.getMessages("lion");
      expect(resultLion).to.deep.equal([
        "Zen, a 3 years old lion, lives in the Junggles of San Diego Zoo in San Diego, CA. Zen loves to spend all day eating meat steaks, buffalo and playing with fluffy bear",
        "Kara, a 2 years old lion, lives in the Junggles of San Diego Zoo in San Diego, CA. Kara loves to spend all day eating rabbit, sheep and running",
      ]);
    });

    it("should search for all animals loves given food", () => {
      // Write findWhoLovesThis function returning string
      // with animals who loves given food
      // if given squids it should return
      // "BonBon (penguin), Pinguini (penguin)"
      // because names should be sorted alphabetically

      const resultSalmon = animalDatasetRepo.findWhoLovesThis("salmon");
      expect(resultSalmon).to.equal("Lorie (bear), Pinguini (penguin)");

      const resultSquids = animalDatasetRepo.findWhoLovesThis("squids");
      expect(resultSquids).to.equal("BonBon (penguin), Pinguini (penguin)");
    });

    it("should organize animals by type", () => {
      // Write organizeByType function returning an organized object
      // with animal type as property name and animals in array as value
      // {"gorilla": [{name: "Coco", age: 7, location: "The Monkey Island of Denver Zoo (Denver, CO)"}], ....}

      const result = animalDatasetRepo.organizeByType();
      expect(result).to.deep.equal({
        bear: [
          {
            name: "Lorie",
            age: 10,
            location: "The Forest Point of Miami Zoo (Miami, FL)",
          },
          {
            name: "Chuck",
            age: 4,
            location: "The Bear Pole of Orlando Zoo (Orlando, FL)",
          },
        ],
        gorilla: [
          {
            name: "Coco",
            age: 7,
            location: "The Monkey Island of Denver Zoo (Denver, CO)",
          },
          {
            name: "Judie",
            age: 5,
            location: "The Green State of Miami Zoo (Miami, FL)",
          },
        ],
        lion: [
          {
            name: "Zen",
            age: 3,
            location: "The Junggles of San Diego Zoo (San Diego, CA)",
          },
          {
            name: "Kara",
            age: 2,
            location: "The Junggles of San Diego Zoo (San Diego, CA)",
          },
        ],
        penguin: [
          {
            name: "Pinguini",
            age: 1,
            location: "The Ice rocks of Denver Zoo (Denver, CO)",
          },
          {
            name: "BonBon",
            age: 5,
            location: "The Ice rocks of Denver Zoo (Denver, CO)",
          },
        ],
      });
    });
  });
});
