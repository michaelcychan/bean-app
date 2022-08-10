const router = require('express').Router();
const DrinkerController = require('../controllers/drinkers.controller');

router.post('/new-drinker', DrinkerController.Create); // create new drinker account
router.post('/log-in', DrinkerController.LogIn); // log in
router.get('/:drinker_id', DrinkerController.GetShopList)

module.exports = router;