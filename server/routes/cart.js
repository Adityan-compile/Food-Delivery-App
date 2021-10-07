const express = require('express');
const router = express.Router();

const { addToCart } = require('../controllers/cartController');

const authenticate = require('../middleware/authenticator');
const manageRole = require('../middleware/role');

router.route('/add').post([authenticate, manageRole('u')], addToCart);

module.exports = router;
