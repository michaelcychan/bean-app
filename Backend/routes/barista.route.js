const router = require('express').Router();
const BaristaController = require('../controllers/barista.controller');

router.get('/shop', BaristaController.Shop);
router.post('/addBeans', BaristaController.AddLoyaltyBean);

module.exports = router;