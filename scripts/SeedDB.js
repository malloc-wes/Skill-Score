
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the SkillSets collection and inserts the skills below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/skillScoredb"
);

const skillSetSeed = [
  {
    skill: "Is this working?"
  }
  
];

db.SkillSet
  .remove({})
  .then(() => db.SkillSet.collection.insertMany(skillSetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });