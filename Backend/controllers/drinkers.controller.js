const Drinker = require('../models/drinker.model');

// Bcrypt
const bcrypt = require('bcrypt');
const saltRound = 5;

const DrinkerController = {
  Create: (req, res) => {
    bcrypt.hash(req.body.password, saltRound, (error, hashedPassword) => {
      const drinker = new Drinker({
        drinker_id: req.body.drinker_id, // need a function to create a auto-incrementing id
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
  }
};

module.exports = DrinkerController;