const router = require('express').Router();
const DrinkerController = require('../controllers/drinkers.controller');

// router.get('/new', DrinkerController.XXXX); // need to define action
router.get('/sign-up', DrinkerController.ShowSignUpPage);
router.post('/new-drinker', DrinkerController.Create);
router.get('/log-in', DrinkerController.LogIn);

module.exports = router;