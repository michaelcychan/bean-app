const router = require('express').Router();
const BaristaController = require('../controllers/barista.controller');

router.post('/new-barista', BaristaController.CreateBarista);
router.post('/log-in', BaristaController.BaristaLogIn);
router.get('/finddrinker/:drinker_id', BaristaController.FindDrinker);
router.post('/addbeans/:drinker_id', BaristaController.AddLoyaltyBean);
router.post('/redeemdrink/:drinker_id', BaristaController.RedeemDrink);

module.exports = router;