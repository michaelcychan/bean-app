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
    console.log(req.params);
    let userID = req.params.drinker_id == 'null'  ? 0 : req.params.drinker_id
    Drinker.findOne({drinker_id: userID},
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

  AddLoyaltyBean: async (req, res) => {
    // declaring variable from POST request from frontend
    const shopID = req.body.shopId; // this is the shopID from frontend
    const drinkerID = req.body.drinker_id // this is the drinker ID from frontend


    // check if the shop id is present in the current info
    let shopList = [];
    const beanCounts = await Drinker.findOne({drinker_id: req.body.drinker_id});

    console.log(beanCounts);
    let indexOfShop = beanCounts.bean_counts.findIndex(element => {
      return element.shopId == shopID ? true : false
    });

    // indexOfShop will be -1 if it does not exist, or an empty array
    if (indexOfShop < 0) {
      await Drinker.updateOne( // Dave, this is what I added after we paired today.
        {drinker_id: drinkerID},
        { $push: {bean_counts: {
          shopId: shopID,
          bean_count: 0
        }}}
      )
    }

    // setting indexOfShop if it is less than 0
    if (indexOfShop < 0 && beanCounts.bean_counts.length != 0) {
      indexOfShop = beanCounts.bean_counts.length
    } else if (indexOfShop < 0 && beanCounts.bean_counts.length == 0) {
      indexOfShop = 0
    }
    console.log(`indexOfShop: ${indexOfShop}`)

    // Add a bean to the shop
    const resultAfterAddingBean = await Drinker.findOneAndUpdate(
      {drinker_id: drinkerID},
      {$inc: {"bean_counts.$[elem].bean_count": 1}},
      {arrayFilters: [{"elem.shopId": shopID}]}
    )
    
    res.json(resultAfterAddingBean.bean_count)
  },

  RedeemDrink: (req, res) => {
    Drinker.findOneAndUpdate({drinker_id: req.params.drinker_id},
      {$inc: {bean_count: -10}}, // in long run, the deduction can be user input rather than a hard-coded. refactored with Add bean??
      (error, drinkers) => {
      if (error) {
        console.log(`Error when deducting beans from database. Error: ${error}`);
        res.status(409).json(`Error when deducting beans from database. Error: ${error}`);
      } else {
        res.json(`Beans used successfully for ID: ${req.params.drinker_id}`)
      }
    })
  },
}

module.exports = BaristaController;