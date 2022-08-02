const Drinker = require('../models/drinker.model');

// Bcrypt
const bcrypt = require('bcrypt');
const saltRound = 5;

const DrinkerController = {
  ShowSignUpPage: (req, res) => {
    res.json('Page for Signing up');
  },

  Create: (req, res) => {
    bcrypt.hash(req.body.password, saltRound, (error, hashedPassword) => {
      const drinker = new Drinker({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
        bean_count: 0
      });
      drinker.save((error, result) => {
        if (error) {
          console.log(error);
          res.status(409).render('/new');
        } else {
            res.json('A new Drinker joined!') // change to render or redirect when we have a better route
        }
      })
    });
  },

  LogIn: (req, res) => {
    res.json('Drinker Log In Page');
  }
};

module.exports = DrinkerController;