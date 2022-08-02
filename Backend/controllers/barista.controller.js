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
      {$inc: {bean_count: 1}},
      (error, drinkers) => {
      if (error) {
        console.log(`Error when adding beans to database. Error: ${error}`);
        res.status(409).json(`Error when adding beans to database. Error: ${error}`);
      } else {
        res.json('Beans added successfully')
      }
    })
  }
}

module.exports = BaristaController;