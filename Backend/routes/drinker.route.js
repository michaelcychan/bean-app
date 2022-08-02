const router = require('express').Router();
const DrinkerController = require('../controllers/drinkers.controller');

// router.get('/new', DrinkerController.XXXX); // need to define action
router.post('/add', DrinkerController.Create);

module.exports = router;