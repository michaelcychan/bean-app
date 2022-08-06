const Barista = require('../models/barista.model');
const Drinker = require('../models/drinker.model');

// Bcrypt
const bcrypt = require('bcrypt');
const saltRound = 5;

const BaristaController ={

  // create a new barista account
  CreateBarista: (req, res) => {
    bcrypt.hash(req.body.password, saltRound, (error, hashedPassword) => {
      const newBarista = new Barista({
        shop_name: req.body.shop_name,
        email: req.body.email,
        password: hashedPassword,
        shop_address: req.body.shop_address
      });
      newBarista.save((error, result) => {
        if (error) {
          console.log(error);
          res.status(409).json('Cannot add new barista'); // has to be changed => error message
        } else {
          res.json('A new Barista joined!') // change to render or redirect when we have a better route
        }
      })
    });
  },

  // Barista Log in:
  BaristaLogIn: (req, res) => {
    console.log('Barista trying to log in');
    const email = req.body.email;
    const inputPassword = req.body.password;

    Barista.findOne({ email: email }).then((barista) => {
      if (!barista) {
        res.status(201).json('No such barista');
      } else {
        bcrypt.compare(inputPassword, barista.password, (err, hashComparison) => {
          if (!hashComparison) {
            res.status(401).json('password not match!');
          } else {
            // Frontend has to know how to handle the ${drinker} object
            console.log(`Backend found the barista: ${barista.email}`)
            res.json(barista);
          }
        })
      }
    });
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