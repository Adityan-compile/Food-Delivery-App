const express = require('express');
const router = express.Router();

const {
  getRestaurants,
  getRestaurantById,
} = require('../controllers/restaurantController');

const authenticate = require('../middleware/authenticator');

router.route('/all').get(getRestaurants);
router.route('/').get(getRestaurantById);

module.exports = router;
