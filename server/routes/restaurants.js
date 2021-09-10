const express = require('express');
const router = express.Router();

const {
  getRestaurants,
  getRestaurantById,
  login,
  signup,
  addReview,
} = require('../controllers/restaurantController');

const authenticate = require('../middleware/authenticator');

router.route('/all').get(getRestaurants);
router.route('/').get(getRestaurantById);
router.route('/login').post(login);
router.route('/signup').post(signup);
router.route('/reviews/new').post(authenticate, addReview);

module.exports = router;
