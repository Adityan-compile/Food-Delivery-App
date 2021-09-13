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

const manageRole = require('../middleware/role');

const fileParser = require('../config/multer');

router.route('/all').get(getRestaurants);

router.route('/').get(getRestaurantById);

router.route('/login').post(login);

router.route('/signup').post([fileParser.single('image')], signup);

router.route('/reviews/new').post([authenticate, manageRole('u')], addReview);

module.exports = router;
