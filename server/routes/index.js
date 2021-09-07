const express = require('express');
const router = express.Router();

const { getItems } = require('../controllers/itemController');
const { getRestaurants } = require('../controllers/restaurantController');

router.route('/items/all').get(getItems);

router.route('/restaurants/all').get(getRestaurants);

module.exports = router;
