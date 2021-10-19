const express = require('express');
const router = express.Router();

const {
  getPublishableKey,
  createPaymentIntent,
} = require('../controllers/paymentController');

const authenticate = require('../middleware/authenticator');

router.route('/keys/publishable').get([authenticate], getPublishableKey);
router.route('/intents/create').post([authenticate], createPaymentIntent);

module.exports = router;
