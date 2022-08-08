const router = require('express').Router();
const DrinkerController = require('../controllers/drinkers.controller');

// router.get('/new', DrinkerController.XXXX); // need to define action
router.get('/sign-up', DrinkerController.ShowSignUpPage); // show sign up page
router.post('/new-drinker', DrinkerController.Create); // create new drinker account
router.get('/log-in', DrinkerController.LogInPage); // show log in page
router.post('/log-in', DrinkerController.LogIn); // log in
router.get('/:drinker_id', DrinkerController.ShowBean); // get bean_count

module.exports = router;