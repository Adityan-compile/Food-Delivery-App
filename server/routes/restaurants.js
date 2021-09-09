const express = require('express');
const router = express.Router();

const {
  getRestaurants,
  getRestaurantById,
  login,
  signup,
} = require('../controllers/restaurantController');

const authenticate = require('../middleware/authenticator');

router.route('/all').get(getRestaurants);
router.route('/').get(getRestaurantById);
router.route('/login').post(login);
router.route('/signup').post(signup);

module.exports = router;
