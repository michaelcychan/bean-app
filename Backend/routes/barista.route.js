const router = require('express').Router();
const BaristaController = require('../controllers/barista.controller');

router.get('/barista-login', BaristaController.ShowLogInPage);
router.get('/shop', BaristaController.Shop);
router.get('/finddrinker/:drinker_id', BaristaController.FindDrinker);
router.post('/addbeans/:drinker_id', BaristaController.AddLoyaltyBean);
router.post('/redeemdrink/:drinker_id', BaristaController.RedeemDrink);

module.exports = router;