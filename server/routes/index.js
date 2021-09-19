const express = require('express');
const router = express.Router();

const { getItems } = require('../controllers/itemController');

router.route('/items/all').get(getItems);
router.route('/auth/logout').post(logout);

module.exports = router;
