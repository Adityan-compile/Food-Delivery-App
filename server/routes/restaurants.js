const express = require('express');
const router = express.Router();

const {
  getRestaurants,
  getRestaurantById,
  login,
  signup,
  addReview,
  searchRestaurant,
} = require('../controllers/restaurantController');

const authenticate = require('../middleware/authenticator');

const manageRole = require('../middleware/role');

const fileParser = require('../config/multer');

const cache = require('../config/cache');

router.route('/all').get(cache.route(), getRestaurants);

router.route('/find').get(cache.route(), getRestaurantById);

router.route('/search').get(cache.route(), searchRestaurant);

router.route('/login').post(login);

router.route('/signup').post([fileParser.single('image')], signup);

router.route('/reviews/new').post([authenticate, manageRole('u')], addReview);

module.exports = router;
