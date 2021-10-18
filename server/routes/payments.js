const express = require('express');
const router = express.Router();

const { getPublishableKey } = require('../controllers/paymentController');

const authenticate = require('../middleware/authenticator');

router.route('/keys/publishable').get([authenticate], getPublishableKey);

module.exports = router;
