const express = require('express');
const router = express.Router();

const { addToCart, getCart } = require('../controllers/cartController');

const authenticate = require('../middleware/authenticator');
const manageRole = require('../middleware/role');

router.route('/').get([authenticate, manageRole('u')], getCart);
router.route('/add').post([authenticate, manageRole('u')], addToCart);

module.exports = router;
