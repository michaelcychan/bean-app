const Drinker = require('../models/drinker.model');

const BaristaController ={
  ShowLogInPage: (req, res) => {
    res.json('Barista Log in Page');
  },

  Shop: (req, res) => {
    res.json('Shop page');
  },

  AddLoyaltyBean: (req, res) => {
    Drinker.findOneAndUpdate({email: req.body.drinker_email},
      {$inc: {bean_count: 1}}, // in long run, the addition can be user input rather than a hard-coded 1
      (error, drinkers) => {
      if (error) {
        console.log(`Error when adding beans to database. Error: ${error}`);
        res.status(409).json(`Error when adding beans to database. Error: ${error}`);
      } else {
        res.json('Beans added successfully')
      }
    })
  },

  RedeemDrink: (req, res) => {
    Drinker.findOneAndUpdate({email: req.body.drinker_email},
      {$inc: {bean_count: -10}}, // in long run, the deduction can be user input rather than a hard-coded. refactored with Add bean??
      (error, drinkers) => {
      if (error) {
        console.log(`Error when deducting beans from database. Error: ${error}`);
        res.status(409).json(`Error when deducting beans from database. Error: ${error}`);
      } else {
        res.json('Beans used successfully')
      }
    })
  }
}

module.exports = BaristaController;