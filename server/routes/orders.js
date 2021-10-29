const express = require('express');
const router = express.Router();

const { saveOrder } = require('../controllers/orderController');

const authenticate = require('../middleware/authenticator');
const manageRole = require('../middleware/role');

router.route('/new').post([authenticate, manageRole('u')], saveOrder);

module.exports = router;
