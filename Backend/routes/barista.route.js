const router = require('express').Router();
const BaristaController = require('../controllers/barista.controller');

router.get('/barista-login', BaristaController.ShowLogInPage);
router.get('/shop', BaristaController.Shop);
router.post('/addbeans', BaristaController.AddLoyaltyBean);
router.post('/redeemdrink', BaristaController.RedeemDrink);

module.exports = router;