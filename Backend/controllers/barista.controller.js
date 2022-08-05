const Drinker = require('../models/drinker.model');

const BaristaController ={
  ShowLogInPage: (req, res) => {
    res.json('Barista Log in Page');
  },

  Shop: (req, res) => {
    res.json('Shop page');
  },

  FindDrinker: (req, res) => {
    Drinker.findOne({drinker_id: req.params.drinker_id},
      (error, drinker) => {
        if (error) {
          console.log(`Error when finding drinker: ${error}`);
          res.status(404).json(`Error when finding drinker: ${error}`);
        } 
        if (drinker != null) {
          res.json(drinker);
        } else {
          res.json('No such drinker');
        }
      }
    ) 
  },

  AddLoyaltyBean: (req, res) => {
    console.log(req.params);
    Drinker.findOneAndUpdate({drinker_id: req.params.drinker_id},
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
    console.log(req.params);
    Drinker.findOneAndUpdate({drinker_id: req.params.drinker_id},
      {$inc: {bean_count: -10}}, // in long run, the deduction can be user input rather than a hard-coded. refactored with Add bean??
      (error, drinkers) => {
      if (error) {
        console.log(`Error when deducting beans from database. Error: ${error}`);
        res.status(409).json(`Error when deducting beans from database. Error: ${error}`);
      } else {
        res.json('Beans used successfully')
      }
    })
  },
}

module.exports = BaristaController;