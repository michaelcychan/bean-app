const Drinker = require('../models/drinker.model');

// Bcrypt
const bcrypt = require('bcrypt');
const saltRound = 5;

const DrinkerController = {

  // create a new drinker account
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
          res.status(409).json('Cannot add new drinker'); // has to be changed => error message
        } else {
          res.json('A new Drinker joined!') 
        }
      })
    });
  },

  // show log in page
  LogInPage: (req, res) => {
    res.json('Drinker Log In Page');
  },

  // log in
  LogIn: (req, res) => {
    console.log('trying to log in');
    const email = req.body.email;
    const inputPassword = req.body.password;

    Drinker.findOne({ email: email }).then((drinker) => {
      if (!drinker) {
        res.json('No such drinker');
      } else {
        bcrypt.compare(inputPassword, drinker.password, (err, hashComparison) => {
          if (!hashComparison) {
            res.json('password not match!');
          } else {
            // Frontend has to know how to handle the ${drinker} object
            res.json(`Log in successful. Email: ${drinker.email}`);
          }
        })
      }
    });
  },

  // to get the latest bean_count from database using session email
  ShowBean: (req, res) => {
    const drinkerEmail = req.session.email;
    Drinker.findOne({email: drinkerEmail}).then((drinker) => {
      if (!drinker) {
        res.json('no such drinker');
      } else {
        res.json({email: drinker.email, bean_count: drinker.bean_count})
      }
    });
  }
};

module.exports = DrinkerController;