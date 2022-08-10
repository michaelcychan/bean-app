const router = require('express').Router();
const BaristaController = require('../controllers/barista.controller');

router.post('/new-barista', BaristaController.CreateBarista);
router.post('/log-in', BaristaController.BaristaLogIn);
router.post('/finddrinker', BaristaController.FindDrinker);
router.post('/addbeans', BaristaController.AddLoyaltyBean);
router.post('/redeemdrink/:drinker_id', BaristaController.RedeemDrink);
router.post('/redeemdrink', BaristaController.NewRedeemDrink);

module.exports = router;