const Drinker = require('../models/drinker.model');

// Bcrypt
const bcrypt = require('bcrypt');
const Barista = require('../models/barista.model');
const saltRound = 5;

const DrinkerController = {

  // create a new drinker account
  Create: (req, res) => {
    let userData = req.body
    bcrypt.hash(userData.password, saltRound, (error, hashedPassword) => {
      const drinker = new Drinker({
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        password: hashedPassword,
        bean_counts: []
      });
      drinker.save((error, result) => {
        if (error) {
          console.log(error);
          res.status(409) // has to be changed => error message
        } else {
          res.json('User added') // change to render or redirect when we have a better route
        }
      })
    });
  },

  // Drinker log in
  LogIn: (req, res) => {
    console.log('trying to log in');
    const userData = req.body
    const email = userData.email;
    const inputPassword = userData.password;

    Drinker.findOne({ email: email }).then((drinker) => {
      if (!drinker) {
        res.json('No such drinker');
      } else {
        bcrypt.compare(inputPassword, drinker.password, (err, hashComparison) => {
          if (!hashComparison) {
            res.json('password not match!');
          } else {
            res.json(drinker);
          }
        })
      }
    });
  },

  // to get the latest bean_count from database using session email
  // ShowBeanCounts: (req, res) => {
  //   const drinker_id = req.params.drinker_id;
  //   Drinker.findOne({drinker_id: drinker_id}).then((drinker) => {
  //     if (!drinker) {
  //       res.json('no such drinker');
  //     } else {
  //       res.json({bean_count: drinker.bean_counts})
  //     }
  //   });
  // }

  GetShopList: async (req, res) => {
    const drinker_id = req.params.drinker_id;
    
    drinker = await Drinker.findOne({drinker_id: drinker_id})

    let shopList = drinker.bean_counts

    res.json(shopList)
  }

};

module.exports = DrinkerController;