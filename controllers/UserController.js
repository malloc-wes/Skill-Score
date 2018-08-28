const db = require("../models");

// Defining methods for the UsersController
module.exports = {
    findAll: function(req, res) {
      db.Users
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log("MADE IT HERE!");
      db.Users
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
          console.log(err);
          res.status(422).json(err)
        });
    },
    remove: function(req, res) {
      db.Users
        .findByUsers({ user: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };